// @flow strict

import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import { testId } from "utils/testId";

import { SearchBar } from "./SearchBar";

const renderComponent = () => {
  const OUTSIDE_CONTAINER = "OUTSIDE_CONTAINER";

  const props = {
    onClose: jest.fn(),
    onSubmit: jest.fn()
  };

  const mounted = render(
    <div data-testid={OUTSIDE_CONTAINER}>
      <SearchBar {...props} />
    </div>
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

  const getOnSubmitCallback = () => props.onSubmit;

  const getOnCloseCallback = () => props.onClose;

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
    getOnSubmitCallback,
    getOnCloseCallback,
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

    const { setInputValue, submit, getOnSubmitCallback } = renderComponent();

    setInputValue(value);

    submit();

    expect(getOnSubmitCallback()).toBeCalledWith(value);
  });
});

describe("on cancel button click", () => {
  test("should call onClose prop", () => {
    const { getOnCloseCallback, clickClearButton } = renderComponent();

    clickClearButton();

    expect(getOnCloseCallback()).toBeCalled();
  });
});

describe("on escape", () => {
  test("should call onClose prop", () => {
    const { getOnCloseCallback, pressEscapeKey } = renderComponent();

    pressEscapeKey();

    expect(getOnCloseCallback()).toBeCalled();
  });
});

describe("on click outside", () => {
  test("should call onClose prop", () => {
    const { getOnCloseCallback, clickOutside } = renderComponent();

    clickOutside();

    expect(getOnCloseCallback()).toBeCalled();
  });
});
