// @flow strict

export function delayPromise<TData>(
  promise: Promise<TData>,
  delay: number
): Promise<TData> {
  return new Promise(resolve => {
    window.setTimeout(() => {
      resolve(promise);
    }, delay);
  });
}
