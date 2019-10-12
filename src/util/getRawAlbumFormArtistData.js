// @flow strict

import type { TAlbumFormArtist } from "type/state";

import { getUniqueString } from "util/getUniqueString";

export const getRawAlbumFormArtistData = (): TAlbumFormArtist => ({
  id: getUniqueString(),
  name: ""
});
