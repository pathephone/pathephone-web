// @flow strict

import type { TFeedAlbum } from "types/stateTypes";

import { asyncTimeout } from "utils/asyncTimeout";

export const getAlbumsByMatcher = async (
  matcher: string
): Promise<TFeedAlbum[]> => {
  await asyncTimeout(500);
  return [];
};
