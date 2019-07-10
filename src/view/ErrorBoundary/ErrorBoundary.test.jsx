// @flow strict
import React from "react";
import { render, cleanup } from "@testing-library/react";

import { ErrorBoundary } from "./ErrorBoundary";

type TParams = {|
  simulateThrow?: boolean,
  error?: Error,
  constructors?: Class<Error>[]
|};

const DEFAULT_MESSAGE = "default message";

const renderComponent = (params: TParams) => {
  const {
    simulateThrow = false,
    error = new Error(DEFAULT_MESSAGE),
    constructors = []
  } = params || {};

  const FALLBACK_VIEW = "FALLBACK_VIEW";
  const CHILD_VIEW = "CHILD_VIEW";

  const FallbackView = ({ message }: Error) => (
    <div data-testid={FALLBACK_VIEW}>{message}</div>
  );

  const ChildView = () => {
    if (simulateThrow) {
      throw error;
    }
    return <div data-testid={CHILD_VIEW} />;
  };

  const mounted = render(
    <ErrorBoundary constructors={constructors} fallbackView={FallbackView}>
      <ChildView />
    </ErrorBoundary>
  );

  const getFallbackNode = () => mounted.getByTestId(FALLBACK_VIEW);

  const getFallbackText = () => getFallbackNode().innerHTML;

  const getChildNode = () => mounted.getByTestId(CHILD_VIEW);

  return { getFallbackNode, getFallbackText, getChildNode };
};

afterEach(cleanup);

describe("on throw error", () => {
  describe("match case", () => {
    test("should render fallback view", () => {
      const { getFallbackNode } = renderComponent({
        simulateThrow: true,
        error: new TypeError(),
        constructors: [TypeError]
      });

      expect(getFallbackNode).not.toThrow();
    });
    test("should not render child view", () => {
      const { getChildNode } = renderComponent({
        simulateThrow: true,
        error: new TypeError(),
        constructors: [TypeError]
      });

      expect(getChildNode).toThrow();
    });
    test("rendered text should match error message", () => {
      const errorMessage = "cool";

      const { getFallbackText } = renderComponent({
        simulateThrow: true,
        error: new Error(errorMessage),
        constructors: [Error]
      });

      expect(getFallbackText()).toEqual(errorMessage);
    });
  });
  describe("does not match case", () => {
    test("should rethrow error away", () => {
      const errorToThrow = new Error();

      try {
        renderComponent({
          simulateThrow: true,
          error: errorToThrow,
          constructors: [TypeError]
        });
      } catch (error) {
        expect(error).toEqual(errorToThrow);
      }
    });
  });
});
