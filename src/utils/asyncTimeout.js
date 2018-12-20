// @flow strict

export const asyncTimeout = (delay: number): Promise<void> => new Promise((r) => setTimeout(r, delay))