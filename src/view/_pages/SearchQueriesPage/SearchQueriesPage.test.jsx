// @flow strict

import type { TServices } from "types/state";

import React from "react";
import {
  wait,
  render,
  cleanup,
  fireEvent,
  waitForElement,
  waitForDomChange
} from "@testing-library/react";

import { mockServices } from "services/mock";
import { testId } from "utils/testId";
import { TestingProvider } from "utils/TestingProvider";
import { getSearchInfoMocks } from "utils/mock/getSearchInfoMock";

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
    <TestingProvider services={services}>
      <SearchQueriesPage />
    </TestingProvider>
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

  await waitForDomChange();

  expect(getPageLoaderNode).toThrow();
});

describe("no queries case", () => {
  test("should display fallback on next render", async () => {
    const { getFallbackNode } = renderComponent();

    await waitForDomChange();

    expect(getFallbackNode).not.toThrow();
  });
  test("should not display feed alongside fallback", async () => {
    const { getFeedNode } = renderComponent();

    await waitForDomChange();

    expect(getFeedNode).toThrow();
  });
});

describe("has queries case", () => {
  test("should display feed once loader disappear", async () => {
    const { getFeedNode } = renderComponent({
      simulateItemsCount: 5
    });

    await waitForDomChange();

    expect(getFeedNode).not.toThrow();
  });
  test("feed items count should match", async () => {
    const count = 5;

    const { getFeedItemsCount } = renderComponent({
      simulateItemsCount: count
    });

    await waitForDomChange();

    expect(getFeedItemsCount()).toEqual(count);
  });
  test("should not display fallback alongside feed", async () => {
    const { getFallbackNode } = renderComponent({
      simulateItemsCount: 5
    });

    await waitForDomChange();

    expect(getFallbackNode).toThrow();
  });
  describe("on delete query button click", () => {
    test("should display loader", async () => {
      const { getPageLoaderNode, clickDeleteQueryButton } = renderComponent({
        simulateItemsCount: 5
      });

      await waitForDomChange();

      clickDeleteQueryButton(1);

      expect(getPageLoaderNode).not.toThrow();
    });
    test("get search queries service should be called eventually", async () => {
      const {
        getSearchQueriesService,
        clickDeleteQueryButton
      } = renderComponent({
        simulateItemsCount: 5
      });

      await waitForDomChange();

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

  await waitForDomChange();

  expect(getLoadMoreButton).not.toThrow();
});

describe("click load more button", () => {
  test("should display feed loader", async () => {
    const { clickLoadMoreButton, getFeedLoaderNode } = renderComponent({
      simulateItemsCount: 1
    });

    await waitForDomChange();

    clickLoadMoreButton();

    expect(getFeedLoaderNode).not.toThrow();
  });
  test("should not display page loader", async () => {
    const { clickLoadMoreButton, getPageLoaderNode } = renderComponent({
      simulateItemsCount: 1
    });

    await waitForDomChange();

    clickLoadMoreButton();

    await expect(waitForElement(getPageLoaderNode)).rejects.toBeTruthy();
  });
});
