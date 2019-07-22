// @flow strict

import type { TFeedAlbum, TServices } from "types/state";

import React from "react";
import {
  cleanup,
  render,
  wait,
  waitForDomChange,
  fireEvent
} from "@testing-library/react";

import { testId } from "utils/testId";
import { mockServices } from "services/mock";
import { routes } from "data/routes";
import { TestingProvider } from "utils/TestingProvider";
import { getFeedAlbumMocks } from "utils/mock/getFeedAlbumMock";

import { SearchQueryPage, type TSearchQueryPageProps } from "./SearchQueryPage";

type TParams = {|
  searchValue?: string,
  results?: TFeedAlbum[],
  simulateSavedSearch?: boolean,
  useJestServicesMocks?: boolean
|};

const defaultResults = [];

const defaultSearchValue = "default search value";

const renderComponent = (params?: TParams) => {
  const {
    searchValue = defaultSearchValue,
    results = defaultResults,
    simulateSavedSearch = false,
    useJestServicesMocks = true
  } = params || {};

  const props: TSearchQueryPageProps = {
    ...((): mixed => null)(),
    match: {
      params: {
        query: searchValue
      }
    }
  };

  const services: TServices = (() => {
    if (useJestServicesMocks) {
      return {
        ...mockServices,
        saveSearch: jest.fn().mockResolvedValue(),
        deleteSearch: jest.fn().mockResolvedValue(),
        getSearchResults: jest.fn().mockResolvedValue(results),
        getSearchInfo: jest.fn().mockResolvedValue({
          saved: simulateSavedSearch,
          resultsCount: results.length,
          text: searchValue
        })
      };
    } else {
      return mockServices;
    }
  })();

  const mounted = render(
    <TestingProvider services={services}>
      <SearchQueryPage {...props} />
    </TestingProvider>
  );

  const getLoaderNode = () =>
    mounted.getByTestId(testId.SEARCH_QUERY_PAGE__LOADER);

  const getTitleText = () =>
    mounted.getByTestId(testId.SEARCH_QUERY_PAGE__TITLE).innerHTML;

  const getSaveSearchButtonNode = () =>
    mounted.getByTestId(testId.SEARCH_QUERY_PAGE__SAVE_SEARCH_BUTTON);

  const getDeleteSearchButtonNode = () =>
    mounted.getByTestId(testId.SEARCH_QUERY_PAGE__DELETE_SEARCH_BUTTON);

  const getFallbackNode = () =>
    mounted.getByTestId(testId.SEARCH_QUERY_PAGE__FALLBACK);

  const getFeedNode = () => mounted.getByTestId(testId.SEARCH_QUERY_PAGE__FEED);

  const getFeedItemsCount = () =>
    mounted.getAllByTestId(testId.SEARCH_QUERY_ALBUM__ROOT_WRAPPER).length;

  const getNewResultsButtonNode = () =>
    mounted.getByTestId(testId.SEARCH_QUERY_PAGE__NEW_RESULTS_BUTTON);

  const clickNewResultsButton = () =>
    fireEvent.click(getNewResultsButtonNode());

  const clickSaveSearchButton = () =>
    fireEvent.click(getSaveSearchButtonNode());

  const clickDeleteSearchButton = () =>
    fireEvent.click(getDeleteSearchButtonNode());

  const getSaveSearchServiceMock = () => services.saveSearch;

  const getDeleteSearchServiceMock = () => services.deleteSearch;

  return {
    getLoaderNode,
    getTitleText,
    getFallbackNode,
    getFeedNode,
    getFeedItemsCount,
    getSaveSearchButtonNode,
    getDeleteSearchButtonNode,
    getNewResultsButtonNode,
    getSaveSearchServiceMock,
    getDeleteSearchServiceMock,

    clickNewResultsButton,
    clickSaveSearchButton,
    clickDeleteSearchButton
  };
};

afterEach(cleanup);

test("should display loader on initial render", () => {
  const { getLoaderNode } = renderComponent();

  expect(() => getLoaderNode()).not.toThrow();
});

test("should display fallback on initial render", () => {
  const { getFallbackNode } = renderComponent();

  expect(() => getFallbackNode()).not.toThrow();
});

test("should display correct title", () => {
  const searchValue = "custom search value";

  const { getTitleText } = renderComponent({
    searchValue
  });

  expect(() => getTitleText()).not.toThrow(searchValue);
});

describe("not saved query case", () => {
  test("should display save search button eventually", async () => {
    const { getSaveSearchButtonNode } = renderComponent();

    await waitForDomChange();

    expect(getSaveSearchButtonNode).not.toThrow();
  });
  describe("on save query button click", () => {
    test("should display loader", async () => {
      const { getLoaderNode, clickSaveSearchButton } = renderComponent();

      await waitForDomChange();

      clickSaveSearchButton();

      expect(getLoaderNode).not.toThrow();
    });
    test("should hide button", async () => {
      const {
        getSaveSearchButtonNode,
        clickSaveSearchButton
      } = renderComponent();

      await waitForDomChange();

      clickSaveSearchButton();

      expect(getSaveSearchButtonNode).toThrow();
    });
    test("should call save search service once", async () => {
      const {
        clickSaveSearchButton,
        getSaveSearchServiceMock
      } = renderComponent();

      await waitForDomChange();

      clickSaveSearchButton();

      expect(getSaveSearchServiceMock()).toBeCalledTimes(1);
    });
    test("should show delete search button on third render", async () => {
      const {
        clickSaveSearchButton,
        getDeleteSearchButtonNode
      } = renderComponent({ useJestServicesMocks: false });

      await waitForDomChange();

      clickSaveSearchButton();

      await waitForDomChange();

      expect(getDeleteSearchButtonNode).not.toThrow();
    });
  });
});

describe("saved query case", () => {
  test("should display delete search button eventually", async () => {
    const { getDeleteSearchButtonNode } = renderComponent({
      simulateSavedSearch: true
    });

    await waitForDomChange();

    expect(getDeleteSearchButtonNode).not.toThrow();
  });
  describe("on delete search button click", () => {
    test("should display loader", async () => {
      const { getLoaderNode, clickDeleteSearchButton } = renderComponent({
        simulateSavedSearch: true
      });

      await waitForDomChange();

      clickDeleteSearchButton();

      expect(() => getLoaderNode()).not.toThrow();
    });
    test("should call delete search service once", async () => {
      const {
        clickDeleteSearchButton,
        getDeleteSearchServiceMock
      } = renderComponent({
        simulateSavedSearch: true
      });

      await waitForDomChange();

      clickDeleteSearchButton();

      expect(getDeleteSearchServiceMock()).toBeCalledTimes(1);
    });
    test("should redirect to search queries list eventually", async () => {
      const { clickDeleteSearchButton } = renderComponent({
        useJestServicesMocks: false
      });

      await waitForDomChange();

      clickDeleteSearchButton();

      await wait(() => {
        expect(window.location.pathname).toEqual(routes.searchQueriesRoute());
      });
    });
  });
});

describe("has results case", () => {
  test("should hide fallback eventually", async () => {
    const { getFallbackNode } = renderComponent({
      results: getFeedAlbumMocks(1)
    });

    await waitForDomChange();

    expect(getFallbackNode).toThrow();
  });
  test("should show feed eventually", async () => {
    const { getFeedNode } = renderComponent({
      results: getFeedAlbumMocks(1)
    });

    await waitForDomChange();

    expect(getFeedNode).not.toThrow();
  });
  test("should display correct feed items count", async () => {
    const itemsCount = 5;

    const { getFeedItemsCount } = renderComponent({
      results: getFeedAlbumMocks(itemsCount)
    });

    await waitForDomChange();

    expect(getFeedItemsCount()).toEqual(itemsCount);
  });
  test("should not display load more button", async () => {
    const { getNewResultsButtonNode } = renderComponent({
      results: getFeedAlbumMocks(1)
    });

    await waitForDomChange();

    expect(getNewResultsButtonNode).toThrow();
  });
});
