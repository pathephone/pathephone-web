import React from "react";
import { render, cleanup, fireEvent, wait } from "@testing-library/react";

import { testId } from "util/testId";
import { mockService } from "service/mock";
import { TestingProvider } from "util/react/TestingProvider";
import { Service } from "type/service";
import { getAlbumPreviewMocks } from "util/mock/albumPreviewMock";

import { LatestAlbumsPage } from "./LatestAlbumsPage";
import { getAppStateMock } from "util/mock/appStateMock";
import { EventBoundary } from "util/react/EventBoundary";

type TParams = {
  preloadingCase?: boolean;
  loadingCase?: boolean;
  hasRecentlyPlayedAlbumsCase?: boolean;
  noRecentlyPlayedAlbumsCase?: boolean;
  noMoreRecentlyPlayedAlbumsCase?: boolean;
  recentlyPlayedAlbumsCount?: number;
};

const renderComponent = (params?: TParams) => {
  const {
    preloadingCase = false,
    loadingCase = false,
    hasRecentlyPlayedAlbumsCase = false,
    noRecentlyPlayedAlbumsCase = false,
    noMoreRecentlyPlayedAlbumsCase = false,
    recentlyPlayedAlbumsCount = 0
  } = params || {};

  const albumPreviewMocks = getAlbumPreviewMocks(recentlyPlayedAlbumsCount);
  const albumPreviewMockIds = albumPreviewMocks.map(item => item.id);

  const appState = getAppStateMock();

  if (preloadingCase) {
    appState.lists.recentlyPlayedAlbumIdList.wantedPages.push(1);
  } else if (loadingCase) {
    appState.lists.recentlyPlayedAlbumIdList.itemsByPage.set(
      1,
      albumPreviewMockIds
    );
    appState.lists.recentlyPlayedAlbumIdList.wantedPages.push(2);
  } else if (noRecentlyPlayedAlbumsCase) {
    appState.lists.recentlyPlayedAlbumIdList.itemsByPage.set(1, []);
    appState.lists.recentlyPlayedAlbumIdList.ended = true;
  } else if (noMoreRecentlyPlayedAlbumsCase) {
    appState.lists.recentlyPlayedAlbumIdList.itemsByPage.set(
      1,
      albumPreviewMockIds
    );
    appState.lists.recentlyPlayedAlbumIdList.ended = true;
  } else if (hasRecentlyPlayedAlbumsCase) {
    appState.lists.recentlyPlayedAlbumIdList.itemsByPage.set(
      1,
      albumPreviewMockIds
    );
  }

  albumPreviewMocks.forEach(item => {
    appState.collections.albumPreviewCollection.byId.set(item.id, item);
  });

  const service: Service = {
    ...mockService,
    getAlbumPreviewsFeed: jest
      .fn()
      .mockResolvedValue(getAlbumPreviewMocks(recentlyPlayedAlbumsCount))
  };

  const handleAppEvent = jest.fn();

  const mounted = render(
    <EventBoundary handler={handleAppEvent}>
      <TestingProvider service={service} appState={appState}>
        <LatestAlbumsPage />
      </TestingProvider>
    </EventBoundary>
  );

  const getPageLoaderNode = () => mounted.getByTestId(testId.PAGE_LOADER);

  const getFallbackNode = () =>
    mounted.getByTestId(testId.LATEST_LABUMS_PAGE__FALLBACK);

  const getFeedNode = () =>
    mounted.getByTestId(testId.LATEST_LABUMS_PAGE__FEED);

  const getFeedItemsCount = () =>
    mounted.getAllByTestId(testId.FEED_ALBUM_WRAPPER).length;

  const getLoadMoreButtonNode = () =>
    mounted.getByTestId(testId.LATEST_LABUMS_PAGE__LOAD_MORE_BUTTON);

  const getFeedLoader = () =>
    mounted.getByTestId(testId.LATEST_LABUMS_PAGE__FEED_LOADER);

  const getAppEventHandler = () => handleAppEvent;

  const clickLoadMoreButton = () => fireEvent.click(getLoadMoreButtonNode());

  return {
    getPageLoaderNode,
    getFallbackNode,
    getFeedNode,
    getFeedItemsCount,
    getLoadMoreButtonNode,
    getFeedLoader,
    getAppEventHandler,
    clickLoadMoreButton
  };
};

afterEach(cleanup);

describe("preloading case ", () => {
  test("should display page loader", async () => {
    const { getPageLoaderNode } = renderComponent({
      preloadingCase: true
    });

    expect(getPageLoaderNode).not.toThrow();

    await wait();
  });
});

describe("loading case", () => {
  test("should display feed loader", async () => {
    const { getFeedLoader } = renderComponent({
      loadingCase: true,
      recentlyPlayedAlbumsCount: 5
    });

    expect(getFeedLoader).not.toThrow();

    await wait();
  });
});

describe("no recently played albums case", () => {
  test("should display fallback", async () => {
    const { getFallbackNode } = renderComponent({
      noRecentlyPlayedAlbumsCase: true
    });

    expect(getFallbackNode).not.toThrow();

    await wait();
  });
});

describe("has recently played albums case", () => {
  test("should display feed", async () => {
    const { getFeedNode } = renderComponent({
      recentlyPlayedAlbumsCount: 1,
      hasRecentlyPlayedAlbumsCase: true
    });

    expect(getFeedNode).not.toThrow();

    await wait();
  });
  test("feed items count should be correct", async () => {
    const count = 5;

    const { getFeedItemsCount } = renderComponent({
      recentlyPlayedAlbumsCount: count,
      hasRecentlyPlayedAlbumsCase: true
    });

    expect(getFeedItemsCount()).toEqual(count);

    await wait();
  });
});

describe("click load more button", () => {
  test("should display feed loader", async () => {
    const { clickLoadMoreButton, getAppEventHandler } = renderComponent({
      recentlyPlayedAlbumsCount: 1,
      hasRecentlyPlayedAlbumsCase: true
    });

    clickLoadMoreButton();

    expect(getAppEventHandler()).toBeCalledWith({
      type: "LATEST_ALBUMS_PAGE__LOAD_MORE"
    });

    await wait();
  });
});
