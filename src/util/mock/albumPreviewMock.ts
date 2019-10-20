import { AlbumPreview } from "type/model";

import { getUIDString } from "util/uid";
import { getArrayFactory } from "util/getArrayFactory";

const getRandomCoverURL = () => {
  return "https://images-na.ssl-images-amazon.com/images/I/51dmdN8ejoL.jpg";
};

export const getAlbumPreviewMock = (): AlbumPreview => ({
  id: getUIDString(),
  artistName: "Artist name",
  title: "Album title",
  coverSrc: getRandomCoverURL(),
  saved: true
});

export const getAlbumPreviewMocks = getArrayFactory(getAlbumPreviewMock);
