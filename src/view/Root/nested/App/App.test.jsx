// @flow strict
import React from "react";
import { render, cleanup, waitForDomChange } from "@testing-library/react";

import { RouterProvider } from "view/RouterProvider";
import { testId } from "utils/testId";
import { ServicesContext } from "contexts/ServicesContext";
import { mockServices } from "services/mock";

import { App } from "./App";

const renderComponent = () => {
  const mounted = render(
    <RouterProvider>
      <ServicesContext.Provider value={mockServices}>
        <App />
      </ServicesContext.Provider>
    </RouterProvider>
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
  const { getLoaderNode } = renderComponent();

  expect(getLoaderNode).not.toThrow();
});

test("should display player screen on second change", async () => {
  const { getPageNode, getHeaderNode, waitForNextChange } = renderComponent();

  await waitForNextChange();

  expect(getPageNode).not.toThrow();
  expect(getHeaderNode).not.toThrow();
});
