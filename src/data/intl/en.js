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
  searchQueriesPage: {
    loadMoreButtonText: "Load more",
    fallbackText: "You have no saved queries"
  },
  searchQueryPage: {
    fallbackText: "Searching...",
    saveSearchButtonText: "Save search",
    deleteSearchButtonText: "Delete search",
    showNewResultsButtonText: "Show new results"
  },
  searchQueryItem: {
    resultsCountText: "Albums found",
    noResultsText: "No albums found"
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
