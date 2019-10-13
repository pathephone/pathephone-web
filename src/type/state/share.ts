export type TShareAlbumPageScreen =
  | "SELECTING_FILES"
  | "EDITING_ALBUM"
  | "LOADING";

// Album form data types

export type TAlbumFormArtist = {
  id: string;
  name: string;
};

export type TAlbumFormTrack = {
  id: string;
  title: string;
  artists: TAlbumFormArtist[];
  audio: File;
};

export type TAlbumFormData = {
  title: string;
  cover: File | null;
  tracklist: TAlbumFormTrack[];
};

// Album form validation types

type TTitleRequired = {
  type: "TITLE_REQUIRED";
};

type TCoverRequired = {
  type: "COVER_REQUIRED";
};

type TEmptyTracklist = {
  type: "EMPTY_TRACKLIST";
};

type TEmptyTrackTitle = {
  type: "EMPTY_TRACK_TITLE";
  payload: string;
};

type TEmptyTrackArtists = {
  type: "EMPTY_TRACK_ARTISTS";
  payload: string;
};

export type TAlbumFormValidity =
  | TTitleRequired
  | TCoverRequired
  | TEmptyTracklist
  | TEmptyTrackTitle
  | TEmptyTrackArtists;

// Share album page data

export type TShareAlbumPageState = {
  screen: TShareAlbumPageScreen;
  // Files selected by user:
  files: null | File[];
  // Editable album candidate instance,
  // extracted from the selected files:
  albumFormData: null | TAlbumFormData;
  albumFormValidation: TAlbumFormValidity[];
  // Flag that indicates success of the sharing process:
  didSucceed: boolean;
  // Flag that indicates that user has submited the form:
  submited: boolean;
  // Error that indicates complete fail of the sharing process:
  error: null | Error;
};
