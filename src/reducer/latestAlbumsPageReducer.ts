import { TLatestAlbumsPageState } from "type/state";
import { TEvent } from "type/event";

export const initialLatestAlbumsState: TLatestAlbumsPageState = {
  latestPage: 1,
  loading: false,
  albums: [],
  noMoreAlbums: false
};

export const latestAlbumsPageReducer = (
  state: TLatestAlbumsPageState,
  event: TEvent
): TLatestAlbumsPageState => {
  switch (event.type) {
    case "LATEST_ALBUMS_PAGE__LOAD_MORE":
      return {
        ...state,
        latestPage: state.latestPage + 1
      };
    case "GET_LATEST_ALBUMS_SERVICE__PENDING":
      return {
        ...state,
        loading: true
      };
    case "GET_LATEST_ALBUMS_SERVICE__RESOLVED":
      return {
        ...state,
        loading: false,
        albums: [...state.albums, ...event.payload.albums],
        noMoreAlbums: event.payload.lastPageFlag
      };
    case "GET_LATEST_ALBUMS_SERVICE__REJECTED":
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
