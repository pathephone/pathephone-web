import { Lists } from "type/state/lists";
import { createList } from "util/createList";

export const createLists = (): Lists => ({
  recentlyPlayedAlbumIdList: createList<string>()
});
