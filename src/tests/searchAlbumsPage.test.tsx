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
import { mockService } from "service/mock";
import { routes } from "util/route";
import { AlbumPreview } from "type/model";
import { Service } from "type/service";
import { getAlbumPreviewMocks } from "util/mock/albumPreviewMock";
import { Root } from "view/root/Root";

type TParams = {
  searchValue?: string;
  results?: AlbumPreview[];
  nextResults?: AlbumPreview[];
  simulateServiceError?: boolean;
};

const defaultResults: AlbumPreview[] = [];

const defaultNewResults: AlbumPreview[] = [];

const defaultSearchValue = "default search value";

const renderComponent = async (params?: TParams) => {
  const {
    searchValue = defaultSearchValue,
    results = defaultResults,
    nextResults = defaultNewResults,
    simulateServiceError = false
  } = params || {};

  const service: Service = (() => {
    if (simulateServiceError) {
      return {
        ...mockService,
        getAlbumPreviewsByQuery: jest.fn().mockImplementation(async () => {
          throw new Error();
        })
      };
    } else {
      return {
        ...mockService,
        getAlbumPreviewsByQuery: jest
          .fn()
          .mockImplementationOnce(async () => results)
          .mockImplementationOnce(async () => nextResults)
          .mockImplementation(async () => [])
      };
    }
  })();

  const history = createMemoryHistory();

  history.push(routes.searchAlbumsRoute(searchValue));

  const mounted = render(<Root service={service} history={history} />);

  await waitForDomChange();

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
  const { getFallbackButtonNode } = await renderComponent();

  expect(() => getFallbackButtonNode()).toThrow();

  await wait();
});

test("should display correct title", async () => {
  const searchValue = "custom search value";

  const { getTitleText } = await renderComponent({
    searchValue
  });

  expect(getTitleText()).toEqual(searchValue);

  await wait();
});

test("should display correct sub title", async () => {
  const { getSubTitleText } = await renderComponent();

  expect(getSubTitleText()).toEqual(
    "The search continues while the page is open"
  );

  await wait();
});

test("should display loader", async () => {
  const { getLoaderNode } = await renderComponent();

  expect(getLoaderNode).not.toThrow();

  await wait();
});

// ONCE FIRST RESULTS RECIEVED

describe("once first results recieved", () => {
  test("should not display fallback button", async () => {
    const { getFallbackButtonNode } = await renderComponent({
      results: getAlbumPreviewMocks(1)
    });

    expect(getFallbackButtonNode).toThrow();

    await wait();
  });
  test("should not display loader", async () => {
    const { getLoaderNode } = await renderComponent({
      results: getAlbumPreviewMocks(1)
    });

    expect(getLoaderNode).toThrow();

    await wait();
  });
  test("should display feed", async () => {
    const { getFeedNode } = await renderComponent({
      results: getAlbumPreviewMocks(1)
    });

    expect(getFeedNode).not.toThrow();

    await wait();
  });
  test("expected feed items count should match", async () => {
    const itemsCount = 5;

    const { getFeedItemsCount } = await renderComponent({
      results: getAlbumPreviewMocks(itemsCount)
    });

    expect(getFeedItemsCount()).toEqual(itemsCount);

    await wait();
  });
  test("should not display new results button", async () => {
    const { getNewResultsButtonNode } = await renderComponent({
      results: getAlbumPreviewMocks(1)
    });

    expect(getNewResultsButtonNode).toThrow();

    await wait();
  });
});

// ONCE NEW RESULTS RECIEVED

describe("once new results recieved", () => {
  test("should not display fallback button", async () => {
    const { getFallbackButtonNode } = await renderComponent({
      results: getAlbumPreviewMocks(1),
      nextResults: getAlbumPreviewMocks(1)
    });

    await waitForDomChange();

    expect(getFallbackButtonNode).toThrow();

    await wait();
  });
  test("should not display loader", async () => {
    const { getLoaderNode } = await renderComponent({
      results: getAlbumPreviewMocks(1),
      nextResults: getAlbumPreviewMocks(1)
    });

    await waitForDomChange();

    expect(getLoaderNode).toThrow();

    await wait();
  });
  test("should display feed", async () => {
    const { getFeedNode } = await renderComponent({
      results: getAlbumPreviewMocks(1),
      nextResults: getAlbumPreviewMocks(1)
    });

    await waitForDomChange();

    expect(getFeedNode).not.toThrow();

    await wait();
  });
  test("expected feed items count should match", async () => {
    const initialItemsCount = 5;

    const { getFeedItemsCount } = await renderComponent({
      results: getAlbumPreviewMocks(initialItemsCount),
      nextResults: getAlbumPreviewMocks(2)
    });

    await waitForDomChange();

    expect(getFeedItemsCount()).toEqual(initialItemsCount);

    await wait();
  });
  test("should display new results button", async () => {
    const { getNewResultsButtonNode } = await renderComponent({
      results: getAlbumPreviewMocks(1),
      nextResults: getAlbumPreviewMocks(1)
    });

    await waitForDomChange();

    expect(getNewResultsButtonNode).not.toThrow();

    await wait();
  });
});

// ONCE NEW RESULTS BUTTON CLICKED

describe("once new results button clicked", () => {
  test("should not display fallback button", async () => {
    const {
      getFallbackButtonNode,
      clickNewResultsButton
    } = await renderComponent({
      results: getAlbumPreviewMocks(1),
      nextResults: getAlbumPreviewMocks(1)
    });

    await waitForDomChange();

    clickNewResultsButton();

    expect(getFallbackButtonNode).toThrow();

    await wait();
  });
  test("should not display loader", async () => {
    const { getLoaderNode, clickNewResultsButton } = await renderComponent({
      results: getAlbumPreviewMocks(1),
      nextResults: getAlbumPreviewMocks(1)
    });

    await waitForDomChange();

    clickNewResultsButton();

    expect(getLoaderNode).toThrow();

    await wait();
  });
  test("should display feed", async () => {
    const { getFeedNode, clickNewResultsButton } = await renderComponent({
      results: getAlbumPreviewMocks(1),
      nextResults: getAlbumPreviewMocks(1)
    });

    await waitForDomChange();

    clickNewResultsButton();

    expect(getFeedNode).not.toThrow();

    await wait();
  });
  test("expected feed items count should match", async () => {
    const initialItemsCount = 5;
    const nextItemsCount = 3;

    const { getFeedItemsCount, clickNewResultsButton } = await renderComponent({
      results: getAlbumPreviewMocks(initialItemsCount),
      nextResults: getAlbumPreviewMocks(nextItemsCount)
    });

    await waitForDomChange();

    clickNewResultsButton();

    expect(getFeedItemsCount()).toEqual(initialItemsCount + nextItemsCount);

    await wait();
  });
  test("should not display new results button", async () => {
    const {
      getNewResultsButtonNode,
      clickNewResultsButton
    } = await renderComponent({
      results: getAlbumPreviewMocks(1),
      nextResults: getAlbumPreviewMocks(1)
    });

    await waitForDomChange();

    clickNewResultsButton();

    expect(getNewResultsButtonNode).toThrow();

    await wait();
  });
});

// ONCE SERVICE CALL FAILED

describe("once service call failed", () => {
  test("should display correct sub title", async () => {
    const { getSubTitleText } = await renderComponent({
      simulateServiceError: true
    });

    expect(getSubTitleText()).toEqual("Something went wrong");

    await wait();
  });
  test("should display fallback button", async () => {
    const { getFallbackButtonNode } = await renderComponent({
      simulateServiceError: true
    });

    expect(getFallbackButtonNode).not.toThrow();

    await wait();
  });
  test("should not display loader", async () => {
    const { getLoaderNode } = await renderComponent({
      simulateServiceError: true
    });

    expect(getLoaderNode).toThrow();

    await wait();
  });
  test("should not display feed", async () => {
    const { getFeedNode } = await renderComponent({
      simulateServiceError: true
    });

    expect(getFeedNode).toThrow();

    await wait();
  });
  test("should not display new results button", async () => {
    const { getNewResultsButtonNode } = await renderComponent({
      simulateServiceError: true
    });

    expect(getNewResultsButtonNode).toThrow();

    await wait();
  });
});
