// @flow strict

export const setAsyncTimeout = (delay: number): Promise<void> =>
  new Promise(r => setTimeout(r, delay));
