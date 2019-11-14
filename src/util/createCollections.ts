import { Collections } from "type/state/collections";
import { AlbumPreview, TrackPreview } from "type/model";
import { createCollection } from "util/createCollection";
import { IntlDictionary } from "type/intl";

export const createCollections = (): Collections => ({
  intlDictionaryCollection: createCollection<IntlDictionary>(),
  albumPreviewCollection: createCollection<AlbumPreview>(),
  trackPreviewCollection: createCollection<TrackPreview>()
});
