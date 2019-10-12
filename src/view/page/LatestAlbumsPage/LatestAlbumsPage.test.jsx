// @flow strict

import type { TServices, TFeedAlbum } from "type/state";

import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForDomChange,
  wait
} from "@testing-library/react";

import { testId } from "util/testId";
import { mockServices } from "service/mock";
import { TestingProvider } from "util/react/TestingProvider";
import { getFeedAlbumMocks } from "util/mock/getFeedAlbumMock";

import { LatestAlbumsPage } from "./LatestAlbumsPage";

type TParams = {|
  firstPageResults?: TFeedAlbum[],
  secondPageResults?: TFeedAlbum[]
|};

const renderComponent = (params?: TParams) => {
  const { firstPageResults = [], secondPageResults = [] } = params || {};

  const services: TServices = {
    ...mockServices,
    getLatestAlbums: jest
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
      firstPageResults: getFeedAlbumMocks(1)
    });

    await waitForDomChange();

    expect(getFeedNode).not.toThrow();

    await wait();
  });
  test("feed items count should be correct", async () => {
    const count = 5;

    const { getFeedItemsCount } = renderComponent({
      firstPageResults: getFeedAlbumMocks(5)
    });

    await waitForDomChange();

    expect(getFeedItemsCount()).toEqual(count);

    await wait();
  });
});

describe("click load more button", () => {
  it("should display feed loader", async () => {
    const { getFeedLoader, clickLoadMoreButton } = renderComponent({
      firstPageResults: getFeedAlbumMocks(5),
      secondPageResults: getFeedAlbumMocks(5)
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
      firstPageResults: getFeedAlbumMocks(firstPageItemsCount),
      secondPageResults: getFeedAlbumMocks(secondPageItemsCount)
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
