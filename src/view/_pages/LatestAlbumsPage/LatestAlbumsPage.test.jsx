// @flow strict

import type { TServices } from "types/state";

import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForDomChange,
  waitForElement
} from "@testing-library/react";

import { testId } from "utils/testId";
import { ServicesContext } from "contexts/ServicesContext";
import { mockServices } from "services/mock/index";

import { LatestAlbumsPage } from "./LatestAlbumsPage";
import { PlayerContext } from "contexts/PlayerContext";
import { getPlayerContextMock, getFeedAlbumMocks } from "utils/mock";

type TParams = {|
  simulateNoAlbumsCase?: boolean,
  simulateLastPageCase?: boolean,
  feedItemsCount?: number
|};

const renderComponent = (params?: TParams) => {
  const {
    simulateNoAlbumsCase = false,
    simulateLastPageCase = false,
    feedItemsCount = 1
  } = params || {};

  const services: TServices = {
    ...mockServices,
    getLatestAlbums: jest.fn().mockImplementation(() => {
      if (simulateNoAlbumsCase) {
        return Promise.resolve({
          items: [],
          lastPageFlag: true
        });
      }
      return Promise.resolve({
        items: getFeedAlbumMocks(feedItemsCount),
        lastPageFlag: simulateLastPageCase
      });
    })
  };

  const mounted = render(
    <ServicesContext.Provider value={services}>
      <PlayerContext.Provider value={getPlayerContextMock()}>
        <LatestAlbumsPage />
      </PlayerContext.Provider>
    </ServicesContext.Provider>
  );

  const getPageWrapperNode = () => mounted.getByTestId(testId.PAGE_WRAPPER);

  const getPageLoaderNode = () => mounted.getByTestId(testId.PAGE_LOADER);

  const getFallbackNode = () =>
    mounted.getByTestId(testId.LATEST_LABUMS_PAGE__FALLBACK);

  const getFeedNode = () =>
    mounted.getByTestId(testId.LATEST_LABUMS_PAGE__FEED);

  const getFeedItemsCount = () =>
    mounted.getAllByTestId(testId.FEED_ALBUM_WRAPPER).length;

  const waitForNextChange = () =>
    waitForDomChange({
      container: getPageWrapperNode()
    });

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
    clickLoadMoreButton,
    waitForNextChange
  };
};

afterEach(cleanup);

test("should display page loader", () => {
  const { getPageLoaderNode } = renderComponent();

  expect(getPageLoaderNode).not.toThrow();
});

describe("no albums case", () => {
  test("should display fallback on next dom change", async () => {
    const { waitForNextChange, getFallbackNode } = renderComponent({
      simulateNoAlbumsCase: true
    });

    await waitForNextChange();

    expect(getFallbackNode).not.toThrow();
  });
});

describe("has albums case", () => {
  test("should display feed on next dom change", async () => {
    const { waitForNextChange, getFeedNode } = renderComponent();

    await waitForNextChange();

    expect(getFeedNode).not.toThrow();
  });
  test("feed items count should be correct", async () => {
    const count = 5;

    const { getFeedNode, getFeedItemsCount } = renderComponent({
      feedItemsCount: count
    });

    await waitForElement(getFeedNode);

    expect(getFeedItemsCount()).toEqual(count);
  });
});

describe("click load more button", () => {
  it("should display feed loader", async () => {
    const {
      getLoadMoreButtonNode,
      getFeedLoader,
      clickLoadMoreButton
    } = renderComponent();

    await waitForElement(getLoadMoreButtonNode);

    clickLoadMoreButton();

    expect(getFeedLoader).not.toThrow();
  });
});
