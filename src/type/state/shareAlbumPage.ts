import { AlbumCandidate } from "type/model";

export type ShareAlbumPageScreen =
  | "SELECTING_FILES"
  | "EDITING_ALBUM"
  | "LOADING";

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

export type AlbumFormValidity =
  | TTitleRequired
  | TCoverRequired
  | TEmptyTracklist
  | TEmptyTrackTitle
  | TEmptyTrackArtists;

// Share album page data

export type ShareAlbumPageState = {
  // Files selected by user:
  files: null | File[];
  // Editable album candidate instance,
  // extracted from the selected files:
  albumFormData: null | AlbumCandidate;
  albumFormValidation: AlbumFormValidity[];
  // Flag that indicates success of the sharing process:
  didSucceed: boolean;
  // Flag that indicates that user has submited the form:
  submited: boolean;
  // Error that indicates complete fail of the sharing process:
  error: null | Error;
};
