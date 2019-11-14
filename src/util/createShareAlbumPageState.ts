import { ShareAlbumPageState } from "type/state";

export const createShareAlbumPageState = (): ShareAlbumPageState => ({
  files: null,
  albumFormData: null,
  albumFormValidation: [],
  didSucceed: false,
  submited: false,
  error: null
});
