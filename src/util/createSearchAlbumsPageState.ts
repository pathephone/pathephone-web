import { SearchAlbumsPageState } from "type/state";

export const createSearchAlbumsPageState = (): SearchAlbumsPageState => ({
  failed: false,
  albums: [],
  newAlbums: []
});
