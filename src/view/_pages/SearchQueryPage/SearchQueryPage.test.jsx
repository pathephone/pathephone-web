// @flow strict

import type { TFeedAlbum, TServices } from "types/state";

import React from "react";
import {
  cleanup,
  render,
  wait,
  waitForElement,
  waitForElementToBeRemoved,
  fireEvent
} from "@testing-library/react";

import { testId } from "utils/testId";
import { ServicesContext } from "contexts/ServicesContext";
import { RouterProvider } from "view/RouterProvider";
import { mockServices } from "services/mock/index";
import { getFeedAlbumMocks, getPlayerContextMock } from "utils/mock";
import { PlayerContext } from "contexts/PlayerContext";
import { routes } from "data/routes";

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
    <RouterProvider>
      <PlayerContext.Provider value={getPlayerContextMock()}>
        <ServicesContext.Provider value={services}>
          <SearchQueryPage {...props} />
        </ServicesContext.Provider>
      </PlayerContext.Provider>
    </RouterProvider>
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

    await waitForElement(getSaveSearchButtonNode);
  });
  describe("on save query button click", () => {
    test("should display loader", async () => {
      const {
        getSaveSearchButtonNode,
        getLoaderNode,
        clickSaveSearchButton
      } = renderComponent();
      await waitForElement(getSaveSearchButtonNode);
      clickSaveSearchButton();
      expect(() => getLoaderNode()).not.toThrow();
    });
    test("should hide button", async () => {
      const {
        getSaveSearchButtonNode,
        clickSaveSearchButton
      } = renderComponent();
      await waitForElement(getSaveSearchButtonNode);
      clickSaveSearchButton();
      expect(() => getSaveSearchButtonNode()).toThrow();
    });
    test("should call save search service once", async () => {
      const {
        getSaveSearchButtonNode,
        clickSaveSearchButton,
        getSaveSearchServiceMock
      } = renderComponent();
      await waitForElement(getSaveSearchButtonNode);
      clickSaveSearchButton();
      expect(getSaveSearchServiceMock()).toBeCalledTimes(1);
    });
    test("should show delete search button eventually", async () => {
      const {
        getSaveSearchButtonNode,
        clickSaveSearchButton,
        getDeleteSearchButtonNode
      } = renderComponent({ useJestServicesMocks: false });

      await waitForElement(getSaveSearchButtonNode);

      clickSaveSearchButton();

      await waitForElement(getDeleteSearchButtonNode);
    });
  });
});

describe("saved query case", () => {
  test("should display delete search button eventually", async () => {
    const { getDeleteSearchButtonNode } = renderComponent({
      simulateSavedSearch: true
    });

    await waitForElement(() => getDeleteSearchButtonNode());
  });
  describe("on delete search button click", () => {
    test("should display loader", async () => {
      const {
        getDeleteSearchButtonNode,
        getLoaderNode,
        clickDeleteSearchButton
      } = renderComponent({
        simulateSavedSearch: true
      });

      await waitForElement(() => getDeleteSearchButtonNode());

      clickDeleteSearchButton();

      expect(() => getLoaderNode()).not.toThrow();
    });
    test("should call delete search service once", async () => {
      const {
        getDeleteSearchButtonNode,
        clickDeleteSearchButton,
        getDeleteSearchServiceMock
      } = renderComponent({
        simulateSavedSearch: true
      });

      await waitForElement(() => getDeleteSearchButtonNode());

      clickDeleteSearchButton();

      expect(getDeleteSearchServiceMock()).toBeCalledTimes(1);
    });
    test("should redirect to search queries list eventually", async () => {
      const {
        clickDeleteSearchButton,
        getDeleteSearchButtonNode
      } = renderComponent({ useJestServicesMocks: false });

      await waitForElement(getDeleteSearchButtonNode);

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

    await waitForElementToBeRemoved(getFallbackNode);
  });
  test("should show feed eventually", async () => {
    const { getFeedNode } = renderComponent({
      results: getFeedAlbumMocks(1)
    });

    await waitForElement(getFeedNode);
  });
  test("should display correct feed items count", async () => {
    const itemsCount = 5;

    const { getFeedNode, getFeedItemsCount } = renderComponent({
      results: getFeedAlbumMocks(itemsCount)
    });

    await waitForElement(getFeedNode);

    expect(getFeedItemsCount()).toEqual(itemsCount);
  });
  test("should not display load more button", async () => {
    const { getFeedNode, getNewResultsButtonNode } = renderComponent({
      results: getFeedAlbumMocks(1)
    });

    await waitForElement(getFeedNode);

    expect(getNewResultsButtonNode).toThrow();
  });
});
