// @flow strict

export const getUniqueString = () => (
  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
)