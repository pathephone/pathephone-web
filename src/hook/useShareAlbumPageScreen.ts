import { useShareAlbumPageState } from "hook/useShareAlbumPageState";
import { ShareAlbumPageScreen } from "type/state";

export const useShareAlbumPageScreen = (): ShareAlbumPageScreen => {
  const { files, albumFormData, submited } = useShareAlbumPageState();

  if (albumFormData !== null && !submited) {
    return "EDITING_ALBUM";
  }

  if (albumFormData !== null && submited) {
    return "LOADING";
  }

  if (files !== null) {
    return "LOADING";
  }

  return "SELECTING_FILES";
};
