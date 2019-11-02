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
    case "GET_ALBUM_PREVIEWS_FEED":
      if (event.status === "PENDING") {
        return {
          ...state,
          loading: true
        };
      }
      if (event.status === "RESOLVED") {
        return {
          ...state,
          loading: false,
          albums: [...state.albums, ...event.payload.items],
          noMoreAlbums: event.payload.lastPageFlag
        };
      }
      if (event.status === "REJECTED") {
        return {
          ...state,
          loading: false
        };
      }
      return state;
    default:
      return state;
  }
};
