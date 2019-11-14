import { ShareAlbumPageState, AlbumFormValidity } from "type/state";
import { AlbumCandidate } from "type/model";

export const patchShareAlbumPageState = (prev: ShareAlbumPageState) => {
  return {
    done(): ShareAlbumPageState {
      return prev;
    },
    setFiles(nextFiles: null | File[]) {
      return patchShareAlbumPageState({
        ...prev,
        files: nextFiles
      });
    },
    setAlbumFormData(nextAlbumFormData: null | AlbumCandidate) {
      return patchShareAlbumPageState({
        ...prev,
        albumFormData: nextAlbumFormData
      });
    },
    setAlbumFormValidation(nextAlbumFormValidation: AlbumFormValidity[]) {
      return patchShareAlbumPageState({
        ...prev,
        albumFormValidation: nextAlbumFormValidation
      });
    },
    setDidSucceed(nextValue: boolean) {
      return patchShareAlbumPageState({
        ...prev,
        didSucceed: nextValue
      });
    },
    setSubmited(nextValue: boolean) {
      return patchShareAlbumPageState({
        ...prev,
        submited: nextValue
      });
    },
    setError(nextValue: null | Error) {
      return patchShareAlbumPageState({
        ...prev,
        error: nextValue
      });
    }
  };
};
