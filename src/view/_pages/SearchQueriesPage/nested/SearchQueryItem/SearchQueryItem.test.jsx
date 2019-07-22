// @flow strict

import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";

import { routes } from "data/routes";
import { testId } from "utils/testId";
import { TestingProvider } from "utils/TestingProvider";
import { getSearchInfoMock } from "utils/mock/getSearchInfoMock";

import { SearchQueryItem } from "./SearchQueryItem";

const searchInfoMock = getSearchInfoMock();

const renderComponent = () => {
  const props = {
    item: searchInfoMock,
    onDelete: jest.fn()
  };

  const mounted = render(
    <TestingProvider>
      <SearchQueryItem {...props} />
    </TestingProvider>
  );

  const getLinkNode = () => mounted.getByTestId(testId.SEARCH_QUERY_ITEM__LINK);

  const getLinkText = () => getLinkNode().innerHTML;

  const getDeleteButtonNode = () => {
    const element = mounted.getByTestId(testId.SEARCH_QUERY_ITEM__BUTTON);
    // Prevent wierd flow getByTestId error
    if (element instanceof HTMLButtonElement) {
      return element;
    } else {
      throw TypeError();
    }
  };

  const getLoaderNode = () =>
    mounted.getByTestId(testId.SEARCH_QUERY_ITEM__LOADER);

  const getOnDeleteCallback = () => props.onDelete;

  const clickLink = () => fireEvent.click(getLinkNode());

  const clickDeleteButton = () => fireEvent.click(getDeleteButtonNode());

  return {
    getLinkNode,
    getLinkText,
    getLoaderNode,
    getDeleteButtonNode,
    getOnDeleteCallback,
    clickLink,
    clickDeleteButton
  };
};

afterEach(cleanup);

test("should show correct link text", () => {
  const { getLinkText } = renderComponent();

  const expectedText = searchInfoMock.text;

  expect(getLinkText()).toEqual(expectedText);
});

describe("on link click", () => {
  test("should set correct window location", () => {
    const { clickLink } = renderComponent();

    clickLink();

    const expectedURL = routes.searchQueryRoute(searchInfoMock.text);

    expect(window.location.pathname).toEqual(expectedURL);
  });
});

describe("on delete query button click", () => {
  it("should call onDelete callback with correct argumet", () => {
    const { getOnDeleteCallback, clickDeleteButton } = renderComponent();

    clickDeleteButton();

    expect(getOnDeleteCallback()).toBeCalledWith(searchInfoMock.text);
  });
});
