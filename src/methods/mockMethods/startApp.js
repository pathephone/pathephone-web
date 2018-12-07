// @flow strict

export const startApp = (): Promise<void> => (
  new Promise((r) => setTimeout(r, 500))
)