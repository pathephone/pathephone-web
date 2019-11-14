import { AppState } from "type/state";
import { createCollections } from "util/createCollections";
import { createLists } from "util/createLists";
import { createViewState } from "util/createViewState";
import { createShareAlbumPageState } from "util/createShareAlbumPageState";
import { createSearchAlbumsPageState } from "util/createSearchAlbumsPageState";
import { createPlayerState } from "util/createPlayerState";

export const createAppState = (): AppState => ({
  viewState: createViewState(),
  collections: createCollections(),
  lists: createLists(),
  shareAlbumPageState: createShareAlbumPageState(),
  searchAlbumsPageState: createSearchAlbumsPageState(),
  playerState: createPlayerState()
});
