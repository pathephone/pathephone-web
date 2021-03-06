import React from "react";
import { render, cleanup, waitForDomChange } from "@testing-library/react";

import { testId } from "util/testId";
import { TestingProvider } from "util/react/TestingProvider";
import { getAppStateMock } from "util/mock/appStateMock";
import { AppState } from "type/state";

import { App } from "./App";

type TParams = {
  simulateLoading?: boolean;
};

const renderComponent = (params?: TParams) => {
  const { simulateLoading = false } = params || {};

  const appState: AppState = {
    ...getAppStateMock(),
    viewState: {
      activeScreen: simulateLoading ? "LOADING" : "PLAYER",
      currentIntlCode: null
    }
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

  const waitForNextChange = () =>
    waitForDomChange({ container: getAppWrapperNode() });

  return { getLoaderNode, getHeaderNode, getPageNode, waitForNextChange };
};

afterEach(cleanup);

test("should display loader", () => {
  const { getLoaderNode } = renderComponent({ simulateLoading: true });

  expect(getLoaderNode).not.toThrow();
});
