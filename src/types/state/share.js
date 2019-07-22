// @flow strict

// Object that represents different view screens.
// There may be only one screen enabled simultaneously.
export type TShareAlbumPageScreenMap = {|
  SELECTING_FILES: boolean,
  EDITING_ALBUM: boolean,
  LOADING: boolean
|};

// Album form data types

export type TAlbumFormArtist = {|
  id: string,
  name: string
|};

export type TAlbumFormTrack = {|
  id: string,
  title: string,
  artists: TAlbumFormArtist[],
  audio: File
|};

export type TAlbumFormData = {|
  title: string,
  cover: File | null,
  tracklist: TAlbumFormTrack[]
|};

// Album form validation types

type TTitleRequired = {|
  type: "TITLE_REQUIRED"
|};

type TCoverRequired = {|
  type: "COVER_REQUIRED"
|};

type TEmptyTracklist = {|
  type: "EMPTY_TRACKLIST"
|};

type TEmptyTrackTitle = {|
  type: "EMPTY_TRACK_TITLE",
  payload: string
|};

type TEmptyTrackArtists = {|
  type: "EMPTY_TRACK_ARTISTS",
  payload: string
|};

export type TAlbumFormValidity =
  | TTitleRequired
  | TCoverRequired
  | TEmptyTracklist
  | TEmptyTrackTitle
  | TEmptyTrackArtists;

// Share album page data

export type TShareAlbumPageState = {|
  screenMap: TShareAlbumPageScreenMap,
  // State stores editable album candidate instance,
  // recieved from the selected audio files.
  albumFormData: null | TAlbumFormData,
  albumFormValidation: TAlbumFormValidity[],
  // Flag that indicates success of the sharing process.
  didSucceed: boolean,
  // Error that indicates complete fail of the sharing process.
  error: null | Error
|};
