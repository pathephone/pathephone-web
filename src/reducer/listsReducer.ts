import { AppEvent } from "type/event";
import { patchList } from "util/patchList";
import { getNextListPage } from "util/getNextListPage";
import { Lists } from "type/state/lists";

export const listsReducer = (state: Lists, event: AppEvent): Lists => {
  switch (event.type) {
    case "LATEST_ALBUMS_PAGE__DID_MOUNT": {
      const nextRecentlyPlayedAlbumIdList = patchList(
        state.recentlyPlayedAlbumIdList
      )
        .addWantedPage(1)
        .done();

      return {
        ...state,
        recentlyPlayedAlbumIdList: nextRecentlyPlayedAlbumIdList
      };
    }

    case "LATEST_ALBUMS_PAGE__WILL_UNMOUNT": {
      const nextRecentlyPlayedAlbumIdList = patchList(
        state.recentlyPlayedAlbumIdList
      )
        .clearItemsByPage()
        .clearWantedPages()
        .done();

      return {
        ...state,
        recentlyPlayedAlbumIdList: nextRecentlyPlayedAlbumIdList
      };
    }

    case "GET_ALBUM_PREVIEWS_FEED":
      if (event.status === "RESOLVED") {
        const page = event.meta;

        const albumIds = event.payload.items.map(item => item.id);

        const nextRecentlyPlayedAlbumIdList = patchList(
          state.recentlyPlayedAlbumIdList
        )
          .deleteWantedPage(page)
          .addPageItems(page, albumIds)
          .setEnded(event.payload.lastPageFlag)
          .done();

        return {
          ...state,
          recentlyPlayedAlbumIdList: nextRecentlyPlayedAlbumIdList
        };
      }

      if (event.status === "REJECTED") {
        const page = event.meta;

        return {
          ...state,
          recentlyPlayedAlbumIdList: patchList(state.recentlyPlayedAlbumIdList)
            .deleteWantedPage(page)
            .done()
        };
      }

      return state;

    case "LATEST_ALBUMS_PAGE__LOAD_MORE":
      return {
        ...state,
        recentlyPlayedAlbumIdList: patchList(state.recentlyPlayedAlbumIdList)
          .addWantedPage(getNextListPage(state.recentlyPlayedAlbumIdList))
          .done()
      };

    default:
      return state;
  }
};
