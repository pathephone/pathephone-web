// @flow strict
import React from "react";
import { render, cleanup, waitForDomChange } from "@testing-library/react";

import { testId } from "utils/testId";
import { TestingProvider } from "utils/TestingProvider";
import { getAppStateMock } from "utils/mock/getAppStateMock";

import { App } from "./App";

type TParams = {|
  simulateLoading?: boolean
|};

const renderComponent = (params?: TParams) => {
  const { simulateLoading = false } = params || {};

  const appState = {
    ...getAppStateMock(),
    activeScreen: simulateLoading ? "LOADING" : "PLAYER"
  };

  const mounted = render(
    <TestingProvider appState={appState}>
      <App />
    </TestingProvider>
  );

  const getAppWrapperNode = () => mounted.getByTestId(testId.APP__WRAPPER);

  const getLoaderNode = () => mounted.getByTestId(testId.APP__LOADER);

  const getHeaderNode = () => mounted.getByTestId(testId.HEADER__PANEL);

  const getPageNode = () => mounted.getByTestId(testId.PAGE_WRAPPER);

  const waitForNextChange = () => waitForDomChange(getAppWrapperNode());

  return { getLoaderNode, getHeaderNode, getPageNode, waitForNextChange };
};

afterEach(cleanup);

test("should display loader", () => {
  const { getLoaderNode } = renderComponent({ simulateLoading: true });

  expect(getLoaderNode).not.toThrow();
});

test("should display player screen on second change", async () => {
  const { getPageNode, getHeaderNode, waitForNextChange } = renderComponent();

  await waitForNextChange();

  expect(getPageNode).not.toThrow();
  expect(getHeaderNode).not.toThrow();
});
