import { Collection } from "type/util";
import { AlbumPreview, TrackPreview } from "type/model";
import { IntlDictionary } from "type/intl";

export type Collections = {
  intlDictionaryCollection: Collection<IntlDictionary>;
  albumPreviewCollection: Collection<AlbumPreview>;
  trackPreviewCollection: Collection<TrackPreview>;
};
