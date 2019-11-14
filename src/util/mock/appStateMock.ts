import { AppState } from "type/state";
import { getIntlMock } from "util/mock/intlMock";
import { createCollections } from "util/createCollections";
import { createLists } from "util/createLists";
import { createShareAlbumPageState } from "util/createShareAlbumPageState";
import { createSearchAlbumsPageState } from "util/createSearchAlbumsPageState";
import { createPlayerState } from "util/createPlayerState";

export const getAppStateMock = (): AppState => {
  const { currentCode, dictionary } = getIntlMock();

  const collections = createCollections();

  collections.intlDictionaryCollection.byId.set(currentCode, dictionary);

  const lists = createLists();

  return {
    viewState: {
      activeScreen: "PLAYER",
      currentIntlCode: currentCode
    },
    collections,
    lists,
    shareAlbumPageState: createShareAlbumPageState(),
    searchAlbumsPageState: createSearchAlbumsPageState(),
    playerState: createPlayerState()
  };
};
