import * as React from "react";

import { useShareAlbumPageState } from "hook/useShareAlbumPageState";
import { useIntlDictionary } from "hook/useIntl";
import { useSubmitAlbumService } from "hook/useSubmitAlbumService";
import { useProcessFilesService } from "hook/useProcessFilesService";
import { Page } from "view/kit/Page";
import { AlbumEditor } from "view/widget/AlbumEditor";
import { DropZone } from "view/widget/DropZone";

import { ShareAlbumPageLoader } from "./styled/ShareAlbumPageLoader";

export const ShareAlbumPageContainer = () => {
  const {
    screen,
    error,
    files,
    albumFormData,
    didSucceed,
    submited
  } = useShareAlbumPageState();

  const submitAlbum = useSubmitAlbumService();

  React.useEffect(() => {
    if (submited && albumFormData) {
      submitAlbum(albumFormData);
    }
  }, [albumFormData, submitAlbum, submited]);

  const processFiles = useProcessFilesService();

  React.useEffect(() => {
    if (files) {
      processFiles(files);
    }
  }, [files, processFiles]);

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
