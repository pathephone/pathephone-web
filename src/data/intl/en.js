// @flow strict

import type { TIntlDictionary } from "types/state";

const intlDictionaryEn: TIntlDictionary = {
  playerNavigation: {
    latestAlbumsLinkText: "Latest albums",
    searchAlbumsLinkText: "Search albums",
    shareAlbumLinkText: "Share album"
  },
  latestAlbumsPage: {
    loadMoreButtonText: "Load more",
    fallbackText: "No albums in you library yet"
  },
  searchAlbumsPage: {
    subTitleText: "The search continues while the page is open",
    fallbackSubTitleText: "Something went wrong",
    newResultsButtonText: "Show new results",
    fallbackButtonText: "Try again"
  },
  albumEditor: {
    aboutFieldsetTitleText: "About",
    tracklistFieldsetTitleText: "Tracklist",
    albumTitleInputPlaceholderText: "Album title",
    submitButtonText: "Submit",
    cancelButtonText: "Cancel"
  },
  albumAudioEditor: {
    missingAudioValidationText: "At least one track required",
    labelText: "Add tracks"
  },
  albumCoverEditor: {
    missingCoverValidationText: "Required field"
  },
  dropZone: {
    mainText: "Click to select album files or drag’n’drop files here"
  },
  albumTrackEditor: {
    titleInputPlaceholderText: "Track title",
    missingTitleValidationText: "Required field",
    missingArtistNameValidationText: "Required field",
    artistNameInputPlaceholderText(trackNumber: number) {
      return `Track artist #${trackNumber}`;
    }
  }
};

export { intlDictionaryEn as dictionary };
