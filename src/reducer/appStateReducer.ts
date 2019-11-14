import { AppEvent } from "type/event";
import { collectionsReducer } from "reducer/collectionsReducer";
import { listsReducer } from "reducer/listsReducer";
import { AppState } from "type/state/appState";
import { viewStateReducer } from "reducer/viewStateReducer";
import { shareAlbumPageReducer } from "reducer/shareAlbumPageReducer";
import { searchAlbumsPageReducer } from "reducer/searchAlbumsPageReducer";
import { playerReducer } from "reducer/playerReducer";

export const appStateReducer = (
  state: AppState,
  event: AppEvent
): AppState => ({
  viewState: viewStateReducer(state.viewState, event),
  collections: collectionsReducer(state.collections, event),
  lists: listsReducer(state.lists, event),
  shareAlbumPageState: shareAlbumPageReducer(state.shareAlbumPageState, event),
  searchAlbumsPageState: searchAlbumsPageReducer(
    state.searchAlbumsPageState,
    event
  ),
  playerState: playerReducer(state.playerState, event)
});
