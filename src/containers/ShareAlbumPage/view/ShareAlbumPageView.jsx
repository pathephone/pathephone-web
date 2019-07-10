// @flow strict

import type { TFormAlbum } from "types/state";

import * as React from "react";

import { Page } from "components/Page";

import { AlbumEditor } from "./nested/AlbumEditor";
import { DropZone } from "./nested/DropZone";
import { ShareAlbumPagePreloader } from "./styled/ShareAlbumPagePreloader";

type TProps = {|
  hasPreloader: boolean,
  hasDropZone: boolean,
  hasAlbumEditor: boolean,
  albumFormData: null | TFormAlbum,
  errorText?: string,
  successText?: string,
  handleFilesRecieved(files: FileList): void,
  handleAlbumFormDataChange(nextAlbum: TFormAlbum): void,
  handleSubmit(): void,
  handleCancel(): void
|};

export const ShareAlbumPageView = (props: TProps) => {
  const {
    hasPreloader,
    hasDropZone,
    hasAlbumEditor,
    errorText,
    successText,
    albumFormData,
    handleAlbumFormDataChange,
    handleSubmit,
    handleCancel,
    handleFilesRecieved
  } = props;

  return (
    <Page centered={hasPreloader || hasDropZone}>
      {hasPreloader && <ShareAlbumPagePreloader />}
      {hasAlbumEditor && albumFormData && (
        <AlbumEditor
          data={albumFormData}
          onDataChange={handleAlbumFormDataChange}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}
      {hasDropZone && (
        <DropZone
          onFilesRecieved={handleFilesRecieved}
          errorText={errorText}
          successText={successText}
        />
      )}
    </Page>
  );
};
