// @flow strict

import type { TServices } from "types/state";

import React from "react";
import {
  wait,
  render,
  cleanup,
  fireEvent,
  waitForElement,
  waitForElementToBeRemoved
} from "@testing-library/react";

import { ServicesContext } from "contexts/ServicesContext";
import { mockServices } from "services/mock/index";
import { testId } from "utils/testId";
import { PlayerContext } from "contexts/PlayerContext";
import { getPlayerContextMock, getSearchInfoMocks } from "utils/mock";
import { RouterProvider } from "view/RouterProvider";

import { SearchQueriesPage } from "./SearchQueriesPage";

type TParams = {
  simulateLastPage?: boolean,
  simulateItemsCount?: number
};

const renderComponent = (params: TParams = {}) => {
  const { simulateLastPage = false, simulateItemsCount = 0 } = params;

  const services: TServices = {
    ...mockServices,
    deleteSearch: jest.fn().mockResolvedValue(),
    getSearchQueries: jest.fn().mockResolvedValue({
      items: getSearchInfoMocks(simulateItemsCount),
      lastPageFlag: simulateLastPage
    })
  };

  const mounted = render(
    <RouterProvider>
      <ServicesContext.Provider value={services}>
        <PlayerContext.Provider value={getPlayerContextMock()}>
          <SearchQueriesPage />
        </PlayerContext.Provider>
      </ServicesContext.Provider>
    </RouterProvider>
  );

  const getPageLoaderNode = () => mounted.getByTestId(testId.PAGE_LOADER);

  const getFallbackNode = () =>
    mounted.getByTestId(testId.SEARCH_QUERIES_PAGE__FALLBACK);

  const getFeedNode = () =>
    mounted.getByTestId(testId.SEARCH_QUERIES_PAGE__FEED);

  const getFeedItemsCount = () =>
    mounted.getAllByTestId(testId.SEARCH_QUERY_ITEM__WRAPPER).length;

  const getDeleteQueryButtonNode = (index: number) =>
    mounted.getAllByTestId(testId.SEARCH_QUERY_ITEM__BUTTON)[index];

  const getSearchQueriesService = () => services.getSearchQueries;

  const getLoadMoreButton = () =>
    mounted.getByTestId(testId.SEARCH_QUERIES_PAGE__LOAD_MORE_BUTTON);

  const getFeedLoaderNode = () =>
    mounted.getByTestId(testId.SEARCH_QUERIES_PAGE__LOADER);

  const clickLoadMoreButton = () => fireEvent.click(getLoadMoreButton());

  const clickDeleteQueryButton = (index: number) =>
    fireEvent.click(getDeleteQueryButtonNode(index));

  return {
    getPageLoaderNode,
    getFallbackNode,
    getFeedNode,
    getFeedItemsCount,
    getSearchQueriesService,
    getLoadMoreButton,
    getFeedLoaderNode,
    clickDeleteQueryButton,
    clickLoadMoreButton
  };
};

afterEach(cleanup);

test("should call get search queries service eventually", async () => {
  const { getSearchQueriesService } = renderComponent();

  const expectedParams = {
    startPage: 1
  };

  await wait(() => {
    expect(getSearchQueriesService()).toHaveBeenCalledWith(expectedParams);
  });
});

test("should show page loader", () => {
  const { getPageLoaderNode } = renderComponent();

  expect(getPageLoaderNode).not.toThrow();
});

test("should hide page loader eventually", async () => {
  const { getPageLoaderNode } = renderComponent();

  await waitForElementToBeRemoved(getPageLoaderNode);
});

describe("no queries case", () => {
  test("should display fallback once page loader disappear", async () => {
    const { getFallbackNode, getPageLoaderNode } = renderComponent();

    await waitForElementToBeRemoved(getPageLoaderNode);

    expect(getFallbackNode).not.toThrow();
  });
  test("should not display feed alongside fallback", async () => {
    const { getFallbackNode, getFeedNode } = renderComponent();

    await waitForElement(getFallbackNode);

    expect(getFeedNode).toThrow();
  });
});

describe("has queries case", () => {
  test("should display feed once loader disappear", async () => {
    const { getFeedNode, getPageLoaderNode } = renderComponent({
      simulateItemsCount: 5
    });

    await waitForElementToBeRemoved(getPageLoaderNode);

    expect(getFeedNode).not.toThrow();
  });
  test("feed items count should match", async () => {
    const count = 5;
    const { getFeedNode, getFeedItemsCount } = renderComponent({
      simulateItemsCount: count
    });

    await waitForElement(getFeedNode);

    expect(getFeedItemsCount()).toEqual(count);
  });
  test("should not display fallback alongside feed", async () => {
    const { getFeedNode, getFallbackNode } = renderComponent({
      simulateItemsCount: 5
    });

    await waitForElement(getFeedNode);

    expect(getFallbackNode).toThrow();
  });
  describe("on delete query button click", () => {
    test("should display loader", async () => {
      const {
        getFeedNode,
        getPageLoaderNode,
        clickDeleteQueryButton
      } = renderComponent({
        simulateItemsCount: 5
      });

      await waitForElement(getFeedNode);

      clickDeleteQueryButton(1);

      expect(getPageLoaderNode).not.toThrow();
    });
    test("get search queries service should be called eventually", async () => {
      const {
        getFeedNode,
        getSearchQueriesService,
        clickDeleteQueryButton
      } = renderComponent({
        simulateItemsCount: 5
      });

      await waitForElement(getFeedNode);

      clickDeleteQueryButton(1);

      const expectedParams = {
        startPage: 1,
        pagesCount: 1
      };

      await wait(() => {
        expect(getSearchQueriesService()).toBeCalledWith(expectedParams);
      });
    });
  });
});

test("should display load more button eventually", async () => {
  const { getLoadMoreButton } = renderComponent({
    simulateItemsCount: 1
  });

  await waitForElement(getLoadMoreButton);
});

describe("click load more button", () => {
  test("should display feed loader", async () => {
    const {
      getLoadMoreButton,
      clickLoadMoreButton,
      getFeedLoaderNode
    } = renderComponent({
      simulateItemsCount: 1
    });

    await waitForElement(getLoadMoreButton);

    clickLoadMoreButton();

    expect(getFeedLoaderNode).not.toThrow();
  });
  test("should not display page loader", async () => {
    const {
      clickLoadMoreButton,
      getPageLoaderNode,
      getLoadMoreButton
    } = renderComponent({
      simulateItemsCount: 1
    });

    await waitForElement(getLoadMoreButton);

    clickLoadMoreButton();

    await expect(waitForElement(getPageLoaderNode)).rejects.toBeTruthy();
  });
});
