// @flow strict

import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import { testId } from "util/testId";
import { EventBoundary } from "util/react/EventBoundary";
import { TestingProvider } from "util/react/TestingProvider";

import { SearchControls } from "./SearchControls";

const renderComponent = () => {
  const OUTSIDE_CONTAINER = "OUTSIDE_CONTAINER";

  const dispatch = jest.fn();

  const mounted = render(
    <TestingProvider>
      <div data-testid={OUTSIDE_CONTAINER}>
        <EventBoundary handler={dispatch}>
          <SearchControls />
        </EventBoundary>
      </div>
    </TestingProvider>
  );

  const getOutsideContainerNode = () => mounted.getByTestId(OUTSIDE_CONTAINER);

  const getInputNode = () => mounted.getByTestId(testId.SEARCH_BAR__INPUT);

  const getFormNode = () => mounted.getByTestId(testId.SEARCH_BAR__FORM);

  const getInputValue = () => {
    const input = getInputNode();
    if (input instanceof HTMLInputElement) {
      return input.value;
    }
    throw new TypeError();
  };

  const getClearButtonNode = () =>
    mounted.getByTestId(testId.SEARCH_BAR__CLEAR_BUTTON);

  const getEventHandler = () => dispatch;

  const setInputValue = (value: string) =>
    fireEvent.change(getInputNode(), { target: { value } });

  const submit = () => fireEvent.submit(getFormNode());

  const clickClearButton = () => fireEvent.click(getClearButtonNode());

  const pressEscapeKey = () => fireEvent.keyUp(window, { key: "Escape" });

  const clickOutside = () => fireEvent.click(getOutsideContainerNode());

  return {
    getInputNode,
    getInputValue,
    getClearButtonNode,
    getEventHandler,
    setInputValue,
    clickClearButton,
    clickOutside,
    pressEscapeKey,
    submit
  };
};

afterEach(cleanup);

test("should display input", () => {
  const { getInputNode } = renderComponent();

  expect(getInputNode).not.toThrow();
});

test("should display clear button", () => {
  const { getClearButtonNode } = renderComponent();

  expect(getClearButtonNode).not.toThrow();
});

test("should manage input value", () => {
  const value = "text value";

  const { setInputValue, getInputValue } = renderComponent();

  setInputValue(value);

  expect(getInputValue()).toEqual(value);
});

describe("on submit", () => {
  test("should call onSubmit prop with correct value", () => {
    const value = "text value";

    const { setInputValue, submit, getEventHandler } = renderComponent();

    setInputValue(value);

    submit();

    expect(getEventHandler()).toBeCalledWith({
      type: "SEARCH_CONTROLS__SUBMIT",
      payload: value
    });
  });
});

describe("on cancel button click", () => {
  test("should call onClose prop", () => {
    const { getEventHandler, clickClearButton } = renderComponent();

    clickClearButton();

    expect(getEventHandler()).toBeCalledWith({
      type: "SEARCH_CONTROLS__CANCEL"
    });
  });
});

describe("on escape", () => {
  test("should call onClose prop", () => {
    const { getEventHandler, pressEscapeKey } = renderComponent();

    pressEscapeKey();

    expect(getEventHandler()).toBeCalledWith({
      type: "SEARCH_CONTROLS__CANCEL"
    });
  });
});

describe("on click outside", () => {
  test("should call onClose prop", () => {
    const { getEventHandler, clickOutside } = renderComponent();

    clickOutside();

    expect(getEventHandler()).toBeCalledWith({
      type: "SEARCH_CONTROLS__CANCEL"
    });
  });
});
