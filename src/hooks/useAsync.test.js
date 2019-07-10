// @flow strict

import { renderHook, act } from "@testing-library/react-hooks";

import { useAsync, InvalidExceptionError } from "./useAsync";

class CustomError extends Error {}

const DEFAULT_VALUE = "value";

const DEFAULT_ERROR = new Error("default error");

type TParams = {|
  resolveWith?: mixed,
  rejectWith?: mixed,
  simulateReject?: boolean,
  errorsToKeep?: Class<Error>[]
|};

const createInstance = (params?: TParams) => {
  const {
    resolveWith = DEFAULT_VALUE,
    rejectWith = DEFAULT_ERROR,
    simulateReject = false,
    errorsToKeep
  } = params || {};

  const asyncFunction = async () => {
    if (simulateReject) {
      throw rejectWith;
    }
    return resolveWith;
  };

  const { result, waitForNextUpdate } = renderHook(() => {
    return useAsync(asyncFunction, { errorsToKeep });
  });

  const getAsyncState = () => result.current[0];

  const callAsyncFunction = () => {
    act(() => {
      result.current[1]();
    });
  };

  const getError = () => {
    return result.error;
  };

  return {
    getError,
    getAsyncState,
    callAsyncFunction,
    waitForNextUpdate
  };
};

test("should have correct initial state", () => {
  const { getAsyncState } = createInstance();

  expect(getAsyncState()).toEqual(null);
});

describe("resolved case", () => {
  test("should have correct second state", async () => {
    const {
      getAsyncState,
      callAsyncFunction,
      waitForNextUpdate
    } = createInstance();

    callAsyncFunction();

    await waitForNextUpdate();

    expect(getAsyncState()).toEqual({
      pending: false,
      resolved: true,
      rejected: false,
      value: DEFAULT_VALUE,
      error: null
    });
  });
  test("should throw if promise was resolved with error", async () => {
    const { getError, callAsyncFunction, waitForNextUpdate } = createInstance({
      resolveWith: DEFAULT_ERROR
    });

    callAsyncFunction();

    await waitForNextUpdate();

    expect(getError()).toEqual(DEFAULT_ERROR);
  });
});

describe("rejected case", () => {
  test("should throw correct error (invalid exception case)", async () => {
    const { getError, callAsyncFunction, waitForNextUpdate } = createInstance({
      simulateReject: true,
      rejectWith: "invalid exception"
    });

    callAsyncFunction();

    await waitForNextUpdate();

    expect(getError() instanceof InvalidExceptionError).toBeTruthy();
  });
  test("should throw correct error (valid exception case)", async () => {
    const { getError, callAsyncFunction, waitForNextUpdate } = createInstance({
      simulateReject: true
    });

    callAsyncFunction();

    await waitForNextUpdate();

    expect(getError()).toEqual(DEFAULT_ERROR);
  });
  test("should throw if error constructor was not listed in errorsToKeep", async () => {
    const { getError, callAsyncFunction, waitForNextUpdate } = createInstance({
      simulateReject: true,
      errorsToKeep: [CustomError]
    });

    callAsyncFunction();

    await waitForNextUpdate();

    expect(getError()).toEqual(DEFAULT_ERROR);
  });
  test("should not throw if error constructor was listed in errorsToKeep", async () => {
    const { getError, callAsyncFunction, waitForNextUpdate } = createInstance({
      simulateReject: true,
      rejectWith: new CustomError(),
      errorsToKeep: [CustomError]
    });

    callAsyncFunction();

    await waitForNextUpdate();

    expect(getError()).toBeFalsy();
  });
  test("should have correct second state", async () => {
    const {
      getAsyncState,
      callAsyncFunction,
      waitForNextUpdate
    } = createInstance({
      simulateReject: true,
      errorsToKeep: [Error]
    });

    callAsyncFunction();

    await waitForNextUpdate();

    expect(getAsyncState()).toEqual({
      pending: false,
      resolved: false,
      rejected: true,
      value: null,
      error: DEFAULT_ERROR
    });
  });
});
