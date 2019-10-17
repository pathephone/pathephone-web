import { AlbumPreview } from "type/model";

export type SearchAlbumsPageState = {
  failed: boolean;
  albums: AlbumPreview[];
  newAlbums: AlbumPreview[];
};

export type SearchAlbumsPageScreen =
  | "LOADING"
  | "HAS_RESULTS"
  | "HAS_NEW_RESULTS"
  | "FALLBACK";
