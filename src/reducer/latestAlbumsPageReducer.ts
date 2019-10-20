import { LatestAlbumsPageState } from "type/state";
import { TEvent } from "type/event";

export const initialLatestAlbumsState: LatestAlbumsPageState = {
  latestPage: 1,
  loading: false,
  albums: [],
  noMoreAlbums: false
};

export const latestAlbumsPageReducer = (
  state: LatestAlbumsPageState,
  event: TEvent
): LatestAlbumsPageState => {
  switch (event.type) {
    case "LATEST_ALBUMS_PAGE__LOAD_MORE":
      return {
        ...state,
        latestPage: state.latestPage + 1
      };
    case "GET_ALBUM_PREVIEWS_FEED__PENDING":
      return {
        ...state,
        loading: true
      };
    case "GET_ALBUM_PREVIEWS_FEED__RESOLVED":
      return {
        ...state,
        loading: false,
        albums: [...state.albums, ...event.payload.albums],
        noMoreAlbums: event.payload.lastPageFlag
      };
    case "GET_ALBUM_PREVIEWS_FEED__REJECTED":
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
