// @flow strict
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import { RouterProvider } from "view/RouterProvider";
import { testId } from "utils/testId";

import { Header } from "./Header";

const renderComponent = () => {
  const OUTSIDE_CONTAINER = "OUTSIDE_CONTAINER";
  const mounted = render(
    <div data-testid={OUTSIDE_CONTAINER}>
      <RouterProvider>
        <Header />
      </RouterProvider>
    </div>
  );

  const getOutsideContainerNode = () => mounted.getByTestId(OUTSIDE_CONTAINER);

  const getSearchButtonNode = () =>
    mounted.getByTestId(testId.HEADER__SEARCH_BUTTON);

  const getNavigationButtonNode = () =>
    mounted.getByTestId(testId.HEADER__NAVIGATION_BUTTON);

  const getSearchBarNode = () => mounted.getByTestId(testId.SEARCH_BAR__FORM);

  const getPlayerNavigationNode = () =>
    mounted.getByTestId(testId.PLAYER_NAVIGATION__POPUP);

  const clickSearchButton = () => fireEvent.click(getSearchButtonNode());

  const clickNavigationButton = () =>
    fireEvent.click(getNavigationButtonNode());

  const clickOutside = () => fireEvent.click(getOutsideContainerNode());

  return {
    getSearchButtonNode,
    getNavigationButtonNode,
    getSearchBarNode,
    getPlayerNavigationNode,
    clickSearchButton,
    clickNavigationButton,
    clickOutside
  };
};

afterEach(cleanup);

test("should display search button", () => {
  const { getSearchButtonNode } = renderComponent();

  expect(getSearchButtonNode).not.toThrow();
});

test("should display navigation button", () => {
  const { getNavigationButtonNode } = renderComponent();

  expect(getNavigationButtonNode).not.toThrow();
});

describe("on search button click", () => {
  test("search bar should appear", () => {
    const { clickSearchButton, getSearchBarNode } = renderComponent();

    clickSearchButton();

    expect(getSearchBarNode).not.toThrow();
  });
});

describe("on navigation button click", () => {
  test("navigation popup should appear", () => {
    const {
      clickNavigationButton,
      getPlayerNavigationNode
    } = renderComponent();

    clickNavigationButton();

    expect(getPlayerNavigationNode).not.toThrow();
  });
});

describe("on outside click", () => {
  test("search bar should disappear", () => {
    const {
      clickOutside,
      clickSearchButton,
      getSearchBarNode
    } = renderComponent();

    clickSearchButton();

    clickOutside();

    expect(getSearchBarNode).toThrow();
  });
  test("navigation popup should disappear", () => {
    const {
      clickOutside,
      clickNavigationButton,
      getPlayerNavigationNode
    } = renderComponent();

    clickNavigationButton();

    clickOutside();

    expect(getPlayerNavigationNode).toThrow();
  });
});
