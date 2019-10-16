import { AlbumPreview } from "type/model";

export type TLatestAlbumsPageState = {
  latestPage: number;
  loading: boolean;
  albums: AlbumPreview[];
  noMoreAlbums: boolean;
};
