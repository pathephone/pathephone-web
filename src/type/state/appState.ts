import { Collections } from "type/state/collections";
import { Lists } from "type/state/lists";
import { ViewState } from "type/state/viewState";
import { ShareAlbumPageState } from "type/state/shareAlbumPage";
import { SearchAlbumsPageState } from "type/state/searchAlbumsPage";
import { PlayerState } from "type/state/player";

export type AppState = {
  viewState: ViewState;
  collections: Collections;
  lists: Lists;
  shareAlbumPageState: ShareAlbumPageState;
  searchAlbumsPageState: SearchAlbumsPageState;
  playerState: PlayerState;
};
