import { AlbumPreview } from "type/model";

export type LatestAlbumsPageState = {
  latestPage: number;
  loading: boolean;
  albums: AlbumPreview[];
  noMoreAlbums: boolean;
};
