// @flow strict
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import { RouterProvider } from "view/RouterProvider";
import { testId } from "utils/testId";

import { OverviewControls } from "./OverviewControls";
import { EventBoundary } from "view/EventBoundary";

const renderComponent = () => {
  const OUTSIDE_CONTAINER = "OUTSIDE_CONTAINER";

  const eventsHandler = jest.fn();

  const mounted = render(
    <div data-testid={OUTSIDE_CONTAINER}>
      <EventBoundary handler={eventsHandler}>
        <RouterProvider>
          <OverviewControls />
        </RouterProvider>
      </EventBoundary>
    </div>
  );

  const getOutsideContainerNode = () => mounted.getByTestId(OUTSIDE_CONTAINER);

  const getSearchButtonNode = () =>
    mounted.getByTestId(testId.HEADER__SEARCH_BUTTON);

  const getNavigationButtonNode = () =>
    mounted.getByTestId(testId.HEADER__NAVIGATION_BUTTON);

  const getPlayerNavigationNode = () =>
    mounted.getByTestId(testId.PLAYER_NAVIGATION__POPUP);

  const clickSearchButton = () => fireEvent.click(getSearchButtonNode());

  const clickNavigationButton = () =>
    fireEvent.click(getNavigationButtonNode());

  const clickOutside = () => fireEvent.click(getOutsideContainerNode());

  const getEventsHandler = () => eventsHandler;

  return {
    getEventsHandler,
    getSearchButtonNode,
    getNavigationButtonNode,
    getPlayerNavigationNode,
    clickSearchButton,
    clickNavigationButton,
    clickOutside
  };
};

afterEach(cleanup);

describe("on search button click", () => {
  test("search bar should appear", () => {
    const { clickSearchButton, getEventsHandler } = renderComponent();

    clickSearchButton();

    expect(getEventsHandler()).toBeCalledWith({
      type: "OVERVIEW_CONTROLS__OPEN_SEARCH"
    });
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
