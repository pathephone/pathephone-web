import { AlbumFormArtist } from "type/state";

import { getUniqueString } from "util/getUniqueString";

export const getRawAlbumFormArtistData = (): AlbumFormArtist => ({
  id: getUniqueString(),
  name: ""
});
