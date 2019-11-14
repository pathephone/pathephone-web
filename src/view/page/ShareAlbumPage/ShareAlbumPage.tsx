import * as React from "react";

import { useShareAlbumPageState } from "hook/useShareAlbumPageState";
import { useIntlDictionary } from "hook/useIntlDictionary";
import { useSubmitAlbumService } from "hook/useSubmitAlbumService";
import { useGetAlbumCandidateFromFilesService } from "hook/useGetAlbumCandidateFromFilesService";
import { Page } from "view/kit/Page";
import { AlbumEditor } from "view/widget/AlbumEditor";
import { DropZone } from "view/widget/DropZone";

import { ShareAlbumPageLoader } from "./styled/ShareAlbumPageLoader";
import { useShareAlbumPageScreen } from "hook/useShareAlbumPageScreen";
import { useDispatch } from "hook/useDispatch";

export const ShareAlbumPage = () => {
  const {
    error,
    files,
    albumFormData,
    didSucceed,
    submited
  } = useShareAlbumPageState();

  const dispatch = useDispatch();

  const screen = useShareAlbumPageScreen();

  const submitAlbumCandidate = useSubmitAlbumService();

  React.useEffect(() => {
    if (submited && albumFormData) {
      submitAlbumCandidate(albumFormData);
    }
  }, [albumFormData, submitAlbumCandidate, submited]);

  const getAlbumCandidate = useGetAlbumCandidateFromFilesService();

  React.useEffect(() => {
    return () => {
      dispatch({
        type: "SHARE_ALBUM_PAGE__WILL_UNMOUNT"
      });
    };
  }, [dispatch]);

  React.useEffect(() => {
    if (files) {
      getAlbumCandidate(files);
    }
  }, [files, getAlbumCandidate]);

  const {
    shareAlbumPage: { didSucceedText }
  } = useIntlDictionary();

  const errorText = error ? error.message : undefined;

  const successText = didSucceed ? didSucceedText : undefined;

  const hasLoader = screen === "LOADING";

  const hasDropZone = screen === "SELECTING_FILES";

  const hasEditor = screen === "EDITING_ALBUM";

  return (
    <Page centered={hasLoader || hasDropZone}>
      {hasLoader && <ShareAlbumPageLoader />}
      {hasEditor && <AlbumEditor />}
      {hasDropZone && (
        <DropZone errorText={errorText} successText={successText} />
      )}
    </Page>
  );
};
