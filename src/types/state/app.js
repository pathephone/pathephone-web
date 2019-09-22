// @flow strict

export type TIntlDictionary = {|
  playerNavigation: {|
    latestAlbumsLinkText: string,
    searchAlbumsLinkText: string,
    shareAlbumLinkText: string
  |},
  latestAlbumsPage: {|
    loadMoreButtonText: string,
    fallbackText: string
  |},
  searchAlbumsPage: {|
    subTitleText: string,
    fallbackSubTitleText: string,
    newResultsButtonText: string,
    fallbackButtonText: string
  |},
  albumEditor: {|
    aboutFieldsetTitleText: string,
    tracklistFieldsetTitleText: string,
    albumTitleInputPlaceholderText: string,
    submitButtonText: string,
    cancelButtonText: string
  |},
  albumAudioEditor: {|
    missingAudioValidationText: string,
    labelText: string
  |},
  albumCoverEditor: {|
    missingCoverValidationText: string
  |},
  dropZone: {|
    mainText: string
  |},
  albumTrackEditor: {|
    titleInputPlaceholderText: string,
    missingTitleValidationText: string,
    missingArtistNameValidationText: string,
    artistNameInputPlaceholderText(trackNumber: number): string
  |}
|};

export type TIntl = {|
  dictionary: TIntlDictionary,
  currentCode: string,
  availableCodes: string[]
|};

export type TAppScreen = "LOADING" | "PLAYER";

export type TAppState = {|
  intl: null | TIntl,
  activeScreen: TAppScreen
|};
