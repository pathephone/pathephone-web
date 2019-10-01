// @flow strict

import type { TServices } from "types/state";

import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForDomChange
} from "@testing-library/react";

import { testId } from "utils/testId";
import { mockServices } from "services/mock";
import { TestingProvider } from "utils/TestingProvider";
import { getFeedAlbumMocks } from "utils/mock/getFeedAlbumMock";

import { LatestAlbumsPage } from "./LatestAlbumsPage";

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
    <TestingProvider services={services}>
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

test("should display page loader", () => {
  const { getPageLoaderNode } = renderComponent();

  expect(getPageLoaderNode).not.toThrow();
});

describe("no albums case", () => {
  test("should display fallback on next dom change", async () => {
    const { getFallbackNode } = renderComponent({
      simulateNoAlbumsCase: true
    });

    await waitForDomChange();

    expect(getFallbackNode).not.toThrow();
  });
});

describe("has albums case", () => {
  test("should display feed on next dom change", async () => {
    const { getFeedNode } = renderComponent();

    await waitForDomChange();

    expect(getFeedNode).not.toThrow();
  });
  test("feed items count should be correct", async () => {
    const count = 5;

    const { getFeedItemsCount } = renderComponent({
      feedItemsCount: count
    });

    await waitForDomChange();

    expect(getFeedItemsCount()).toEqual(count);
  });
});

describe("click load more button", () => {
  it("should display feed loader", async () => {
    const { getFeedLoader, clickLoadMoreButton } = renderComponent();

    await waitForDomChange();

    clickLoadMoreButton();

    expect(getFeedLoader).not.toThrow();
  });
});
