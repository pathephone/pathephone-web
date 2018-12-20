// @flow strict

import { asyncTimeout } from "utils/asyncTimeout";

export const getLatestAlbums = (): Promise<void> => (
  asyncTimeout(500)
)