import { TFeedAlbum, TServices } from "type/state";

import React from "react";
import { createMemoryHistory } from "history";
import {
  cleanup,
  render,
  waitForDomChange,
  fireEvent,
  wait
} from "@testing-library/react";

import { testId } from "util/testId";
import { mockServices } from "service/mock";
import { getFeedAlbumMocks } from "util/mock/getFeedAlbumMock";
import { TestingProvider } from "util/react/TestingProvider";

import { SearchAlbumsPage } from "./SearchAlbumsPage";
import { routes } from "util/route";

type TParams = {
  searchValue?: string;
  results?: TFeedAlbum[];
  nextResults?: TFeedAlbum[];
  simulateServiceError?: boolean;
};

const defaultResults: TFeedAlbum[] = [];

const defaultNewResults: TFeedAlbum[] = [];

const defaultSearchValue = "default search value";

const renderComponent = (params?: TParams) => {
  const {
    searchValue = defaultSearchValue,
    results = defaultResults,
    nextResults = defaultNewResults,
    simulateServiceError = false
  } = params || {};

  const services: TServices = (() => {
    if (simulateServiceError) {
      return {
        ...mockServices,
        getAlbumsByQuery: jest.fn().mockImplementation(async () => {
          throw new Error();
        })
      };
    } else {
      return {
        ...mockServices,
        getAlbumsByQuery: jest
          .fn()
          .mockImplementationOnce(async () => results)
          .mockImplementationOnce(async () => nextResults)
          .mockImplementation(async () => [])
      };
    }
  })();

  const history = createMemoryHistory({
    initialEntries: [routes.searchAlbumsRoute(searchValue)]
  });

  const mounted = render(
    <TestingProvider
      services={services}
      history={history}
      path={routes.searchAlbumsPattern}
    >
      <SearchAlbumsPage searchInterval={100} />
    </TestingProvider>
  );

  const getLoaderNode = () =>
    mounted.getByTestId(testId.SEARCH_ALBUMS_PAGE__LOADER);

  const getTitleText = () =>
    mounted.getByTestId(testId.SEARCH_ALBUMS_PAGE__TITLE).innerHTML;

  const getSubTitleText = () =>
    mounted.getByTestId(testId.SEARCH_ALBUMS_PAGE__SUB_TITLE).innerHTML;

  const getSaveSearchButtonNode = () =>
    mounted.getByTestId(testId.SEARCH_ALBUMS_PAGE__SAVE_SEARCH_BUTTON);

  const getDeleteSearchButtonNode = () =>
    mounted.getByTestId(testId.SEARCH_ALBUMS_PAGE__DELETE_SEARCH_BUTTON);

  const getFallbackButtonNode = () =>
    mounted.getByTestId(testId.SEARCH_ALBUMS_PAGE__FALLBACK_BUTTON);

  const getFeedNode = () =>
    mounted.getByTestId(testId.SEARCH_ALBUMS_PAGE__FEED);

  const getFeedItemsCount = () =>
    mounted.getAllByTestId(testId.FEED_ALBUM_WRAPPER).length;

  const getNewResultsButtonNode = () =>
    mounted.getByTestId(testId.SEARCH_ALBUMS_PAGE__NEW_RESULTS_BUTTON);

  const clickNewResultsButton = () =>
    fireEvent.click(getNewResultsButtonNode());

  const clickSaveSearchButton = () =>
    fireEvent.click(getSaveSearchButtonNode());

  const clickDeleteSearchButton = () =>
    fireEvent.click(getDeleteSearchButtonNode());

  return {
    getLoaderNode,
    getTitleText,
    getSubTitleText,
    getFallbackButtonNode,
    getFeedNode,
    getFeedItemsCount,
    getSaveSearchButtonNode,
    getDeleteSearchButtonNode,
    getNewResultsButtonNode,

    clickNewResultsButton,
    clickSaveSearchButton,
    clickDeleteSearchButton
  };
};

afterEach(cleanup);

test("should not display fallback button", async () => {
  const { getFallbackButtonNode } = renderComponent();

  expect(() => getFallbackButtonNode()).toThrow();

  await wait();
});

test("should display correct title", async () => {
  const searchValue = "custom search value";

  const { getTitleText } = renderComponent({
    searchValue
  });

  expect(getTitleText).not.toThrow(searchValue);

  await wait();
});

test("should display correct sub title", async () => {
  const { getSubTitleText } = renderComponent();

  expect(getSubTitleText()).toEqual(
    "The search continues while the page is open"
  );

  await wait();
});

test("should display loader", async () => {
  const { getLoaderNode } = renderComponent();

  expect(getLoaderNode).not.toThrow();

  await wait();
});

// ONCE FIRST RESULTS RECIEVED

describe("once first results recieved", () => {
  test("should not display fallback button", async () => {
    const { getFallbackButtonNode } = renderComponent({
      results: getFeedAlbumMocks(1)
    });

    await waitForDomChange();

    expect(getFallbackButtonNode).toThrow();

    await wait();
  });
  test("should not display loader", async () => {
    const { getLoaderNode } = renderComponent({
      results: getFeedAlbumMocks(1)
    });

    await waitForDomChange();

    expect(getLoaderNode).toThrow();

    await wait();
  });
  test("should display feed", async () => {
    const { getFeedNode } = renderComponent({
      results: getFeedAlbumMocks(1)
    });

    await waitForDomChange();

    expect(getFeedNode).not.toThrow();

    await wait();
  });
  test("expected feed items count should match", async () => {
    const itemsCount = 5;

    const { getFeedItemsCount } = renderComponent({
      results: getFeedAlbumMocks(itemsCount)
    });

    await waitForDomChange();

    expect(getFeedItemsCount()).toEqual(itemsCount);

    await wait();
  });
  test("should not display new results button", async () => {
    const { getNewResultsButtonNode } = renderComponent({
      results: getFeedAlbumMocks(1)
    });

    await waitForDomChange();

    expect(getNewResultsButtonNode).toThrow();

    await wait();
  });
});

// ONCE NEW RESULTS RECIEVED

describe("once new results recieved", () => {
  test("should not display fallback button", async () => {
    const { getFallbackButtonNode } = renderComponent({
      results: getFeedAlbumMocks(1),
      nextResults: getFeedAlbumMocks(1)
    });

    await waitForDomChange();

    await waitForDomChange();

    expect(getFallbackButtonNode).toThrow();

    await wait();
  });
  test("should not display loader", async () => {
    const { getLoaderNode } = renderComponent({
      results: getFeedAlbumMocks(1),
      nextResults: getFeedAlbumMocks(1)
    });

    await waitForDomChange();

    await waitForDomChange();

    expect(getLoaderNode).toThrow();

    await wait();
  });
  test("should display feed", async () => {
    const { getFeedNode } = renderComponent({
      results: getFeedAlbumMocks(1),
      nextResults: getFeedAlbumMocks(1)
    });

    await waitForDomChange();

    await waitForDomChange();

    expect(getFeedNode).not.toThrow();

    await wait();
  });
  test("expected feed items count should match", async () => {
    const initialItemsCount = 5;

    const { getFeedItemsCount } = renderComponent({
      results: getFeedAlbumMocks(initialItemsCount),
      nextResults: getFeedAlbumMocks(2)
    });

    await waitForDomChange();

    await waitForDomChange();

    expect(getFeedItemsCount()).toEqual(initialItemsCount);

    await wait();
  });
  test("should display new results button", async () => {
    const { getNewResultsButtonNode } = renderComponent({
      results: getFeedAlbumMocks(1),
      nextResults: getFeedAlbumMocks(1)
    });

    await waitForDomChange();

    await waitForDomChange();

    expect(getNewResultsButtonNode).not.toThrow();

    await wait();
  });
});

// ONCE NEW RESULTS BUTTON CLICKED

describe("once new results button clicked", () => {
  test("should not display fallback button", async () => {
    const { getFallbackButtonNode, clickNewResultsButton } = renderComponent({
      results: getFeedAlbumMocks(1),
      nextResults: getFeedAlbumMocks(1)
    });

    await waitForDomChange();

    await waitForDomChange();

    clickNewResultsButton();

    expect(getFallbackButtonNode).toThrow();

    await wait();
  });
  test("should not display loader", async () => {
    const { getLoaderNode, clickNewResultsButton } = renderComponent({
      results: getFeedAlbumMocks(1),
      nextResults: getFeedAlbumMocks(1)
    });

    await waitForDomChange();

    await waitForDomChange();

    clickNewResultsButton();

    expect(getLoaderNode).toThrow();

    await wait();
  });
  test("should display feed", async () => {
    const { getFeedNode, clickNewResultsButton } = renderComponent({
      results: getFeedAlbumMocks(1),
      nextResults: getFeedAlbumMocks(1)
    });

    await waitForDomChange();

    await waitForDomChange();

    clickNewResultsButton();

    expect(getFeedNode).not.toThrow();

    await wait();
  });
  test("expected feed items count should match", async () => {
    const initialItemsCount = 5;
    const nextItemsCount = 3;

    const { getFeedItemsCount, clickNewResultsButton } = renderComponent({
      results: getFeedAlbumMocks(initialItemsCount),
      nextResults: getFeedAlbumMocks(nextItemsCount)
    });

    await waitForDomChange();

    await waitForDomChange();

    clickNewResultsButton();

    expect(getFeedItemsCount()).toEqual(initialItemsCount + nextItemsCount);

    await wait();
  });
  test("should not display new results button", async () => {
    const { getNewResultsButtonNode, clickNewResultsButton } = renderComponent({
      results: getFeedAlbumMocks(1),
      nextResults: getFeedAlbumMocks(1)
    });

    await waitForDomChange();

    await waitForDomChange();

    clickNewResultsButton();

    expect(getNewResultsButtonNode).toThrow();

    await wait();
  });
});

// ONCE SERVICE CALL FAILED

describe("once service call failed", () => {
  test("should display correct sub title", async () => {
    const { getSubTitleText } = renderComponent({
      simulateServiceError: true
    });

    await waitForDomChange();

    expect(getSubTitleText()).toEqual("Something went wrong");

    await wait();
  });
  test("should display fallback button", async () => {
    const { getFallbackButtonNode } = renderComponent({
      simulateServiceError: true
    });

    await waitForDomChange();

    expect(getFallbackButtonNode).not.toThrow();

    await wait();
  });
  test("should not display loader", async () => {
    const { getLoaderNode } = renderComponent({
      simulateServiceError: true
    });

    await waitForDomChange();

    expect(getLoaderNode).toThrow();

    await wait();
  });
  test("should not display feed", async () => {
    const { getFeedNode } = renderComponent({
      simulateServiceError: true
    });

    await waitForDomChange();

    expect(getFeedNode).toThrow();

    await wait();
  });
  test("should not display new results button", async () => {
    const { getNewResultsButtonNode } = renderComponent({
      simulateServiceError: true
    });

    await waitForDomChange();

    expect(getNewResultsButtonNode).toThrow();

    await wait();
  });
});
