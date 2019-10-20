import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForDomChange,
  wait
} from "@testing-library/react";

import { testId } from "util/testId";
import { mockService } from "service/mock";
import { TestingProvider } from "util/react/TestingProvider";
import { AlbumPreview } from "type/model";
import { Service } from "type/service";
import { getAlbumPreviewMocks } from "util/mock/albumPreviewMock";

import { LatestAlbumsPage } from "./LatestAlbumsPage";

type TParams = {
  firstPageResults?: AlbumPreview[];
  secondPageResults?: AlbumPreview[];
};

const renderComponent = (params?: TParams) => {
  const { firstPageResults = [], secondPageResults = [] } = params || {};

  const service: Service = {
    ...mockService,
    getAlbumPreviewsFeed: jest
      .fn()
      .mockImplementationOnce(async () => ({
        items: firstPageResults,
        lastPageFlag: secondPageResults.length === 0
      }))
      .mockImplementationOnce(async () => ({
        items: secondPageResults,
        lastPageFlag: true
      }))
      .mockImplementation(async () => ({
        items: [],
        lastPageFlag: false
      }))
  };

  const mounted = render(
    <TestingProvider service={service}>
      <LatestAlbumsPage />
    </TestingProvider>
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

  const clickLoadMoreButton = () => fireEvent.click(getLoadMoreButtonNode());

  return {
    getPageLoaderNode,
    getFallbackNode,
    getFeedNode,
    getFeedItemsCount,
    getLoadMoreButtonNode,
    getFeedLoader,
    clickLoadMoreButton
  };
};

afterEach(cleanup);

test("should display page loader", async () => {
  const { getPageLoaderNode } = renderComponent();

  expect(getPageLoaderNode).not.toThrow();

  await wait();
});

describe("no albums case", () => {
  test("should display fallback on next dom change", async () => {
    const { getFallbackNode } = renderComponent();

    await waitForDomChange();

    expect(getFallbackNode).not.toThrow();

    await wait();
  });
});

describe("has albums case", () => {
  test("should display feed on next dom change", async () => {
    const { getFeedNode } = renderComponent({
      firstPageResults: getAlbumPreviewMocks(1)
    });

    await waitForDomChange();

    expect(getFeedNode).not.toThrow();

    await wait();
  });
  test("feed items count should be correct", async () => {
    const count = 5;

    const { getFeedItemsCount } = renderComponent({
      firstPageResults: getAlbumPreviewMocks(5)
    });

    await waitForDomChange();

    expect(getFeedItemsCount()).toEqual(count);

    await wait();
  });
});

describe("click load more button", () => {
  it("should display feed loader", async () => {
    const { getFeedLoader, clickLoadMoreButton } = renderComponent({
      firstPageResults: getAlbumPreviewMocks(5),
      secondPageResults: getAlbumPreviewMocks(5)
    });

    await waitForDomChange();

    clickLoadMoreButton();

    expect(getFeedLoader).not.toThrow();

    await wait();
  });
  it("should display feed loader", async () => {
    const firstPageItemsCount = 5;
    const secondPageItemsCount = 5;

    const { getFeedItemsCount, clickLoadMoreButton } = renderComponent({
      firstPageResults: getAlbumPreviewMocks(firstPageItemsCount),
      secondPageResults: getAlbumPreviewMocks(secondPageItemsCount)
    });

    await waitForDomChange();

    clickLoadMoreButton();

    await waitForDomChange();

    expect(getFeedItemsCount()).toEqual(
      firstPageItemsCount + secondPageItemsCount
    );

    await wait();
  });
});
