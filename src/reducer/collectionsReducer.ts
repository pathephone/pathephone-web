import { AppEvent } from "type/event";
import { patchCollection } from "util/patchCollection";
import { Collections } from "type/state/collections";

export const collectionsReducer = (
  state: Collections,
  event: AppEvent
): Collections => {
  switch (event.type) {
    case "GET_INTL":
      if (event.status === "RESOLVED") {
        const nextIntlDictionaryCollection = patchCollection(
          state.intlDictionaryCollection
        )
          .addItem(event.payload.currentCode, event.payload.dictionary)
          .done();

        return {
          ...state,
          intlDictionaryCollection: nextIntlDictionaryCollection
        };
      }

      return state;

    case "GET_ALBUM_PREVIEWS_FEED":
      if (event.status === "RESOLVED") {
        let patcher = patchCollection(state.albumPreviewCollection);

        event.payload.items.forEach(item => {
          patcher = patcher.addItem(item.id, item);
          patcher = patcher.deleteWantedId(item.id);
        });

        const nextAlbumPreviewCollection = patcher.done();

        return {
          ...state,
          albumPreviewCollection: nextAlbumPreviewCollection
        };
      }

      return state;

    case "GET_TRACK_PREVIEWS_BY_ALBUM_IDS": {
      if (event.status === "RESOLVED") {
        let patcher = patchCollection(state.trackPreviewCollection);

        event.payload.forEach(item => {
          patcher = patcher.addItem(item.id, item);
          patcher = patcher.deleteWantedId(item.id);
        });

        const nextTrackPreviewCollection = patcher.done();

        return {
          ...state,
          trackPreviewCollection: nextTrackPreviewCollection
        };
      }
      return state;
    }

    default:
      return state;
  }
};
