import { SearchAlbumsPageState } from "type/state";
import { TEvent } from "type/event";

export const initialSearchAlbumsPageState: SearchAlbumsPageState = {
  failed: false,
  albums: [],
  newAlbums: []
};

export const searchAlbumsPageReducer = (
  state: SearchAlbumsPageState,
  event: TEvent
): SearchAlbumsPageState => {
  switch (event.type) {
    case "GET_ALBUMS_BY_QUERY_SERVICE__RESOLVED": {
      if (state.albums.length === 0) {
        return {
          ...state,
          albums: event.payload
        };
      }

      const newAlbums = event.payload.filter(({ id }) =>
        state.albums.some(album => album.id !== id)
      );

      return {
        ...state,
        newAlbums: [...state.newAlbums, ...newAlbums]
      };
    }
    case "GET_ALBUMS_BY_QUERY_SERVICE__REJECTED": {
      return {
        ...initialSearchAlbumsPageState,
        failed: true
      };
    }
    case "SEARCH_ALBUMS_PAGE__RETRY":
      return {
        ...state,
        failed: false
      };
    case "SEARCH_ALBUMS_PAGE__SHOW_NEW_RESULTS":
      return {
        ...state,
        albums: [...state.newAlbums, ...state.albums],
        newAlbums: []
      };
    case "SEARCH_ALBUMS_PAGE__NEW_QUERY":
      return {
        ...initialSearchAlbumsPageState
      };
    default:
      return state;
  }
};
