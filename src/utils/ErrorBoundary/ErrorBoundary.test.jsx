// @flow strict
import React from "react";
import { render, cleanup } from "@testing-library/react";

import { ErrorBoundary } from "./ErrorBoundary";

type TParams = {|
  error?: Error,
  constructors?: Class<Error>[]
|};

const errorLogger = console.error;

beforeAll(() => {
  // Silence all console.error calls.
  // $FlowFixMe
  console.error = () => {};
});

afterAll(() => {
  // Restore error logger .
  // $FlowFixMe
  console.error = errorLogger;
});

const customError = new Error("Custom error");
const customTypeError = new TypeError("Custom type error");

const renderComponent = (params: TParams) => {
  const { error, constructors = [] } = params || {};

  const FALLBACK_VIEW = "FALLBACK_VIEW";
  const CHILD_VIEW = "CHILD_VIEW";

  const FallbackView = ({ message }: Error) => (
    <div data-testid={FALLBACK_VIEW}>{message}</div>
  );

  const ChildView = () => {
    if (error) {
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
        error: customTypeError,
        constructors: [TypeError]
      });

      expect(getFallbackNode).not.toThrow();
    });
    test("should not render child view", () => {
      const { getChildNode } = renderComponent({
        error: customTypeError,
        constructors: [TypeError]
      });

      expect(getChildNode).toThrow();
    });
    test("rendered text should match error message", () => {
      const { getFallbackText } = renderComponent({
        error: customError,
        constructors: [Error]
      });

      expect(getFallbackText()).toEqual(customError.message);
    });
  });

  describe("does not match case", () => {
    test("should rethrow error away", () => {
      try {
        renderComponent({
          error: customError,
          constructors: [TypeError]
        });
      } catch (error) {
        expect(error).toEqual(customError);
      }
    });
  });
});
