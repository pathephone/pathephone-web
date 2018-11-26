// @flow strict

import { getAlbumsBySearch } from "api/getAlbumsBySearch";
import { getLatestAlbums } from "api/getLatestAlbums";
import { toFeedAlbums } from "utils/toFeedAlbums";

export const getAlbums = async (matcher: string) => {
  await new Promise(r => setTimeout(r, 1000))
  if (matcher) {
    return getAlbumsBySearch(matcher)
      .then(toFeedAlbums)
  }
  return getLatestAlbums()
    .then(toFeedAlbums)
}
