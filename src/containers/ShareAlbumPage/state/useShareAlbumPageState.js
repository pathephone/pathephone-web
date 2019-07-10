// @flow strict

import type { TFormAlbum } from "types/state";

import * as React from "react";

import { useAsync } from "hooks/useAsync";
import { getAlbumFormDataFromFiles } from "utils/getAlbumFormDataFromFiles";
import { useServices } from "hooks/useServices";

export const useShareAlbumPageState = () => {
  const [errorText, setErrorText] = React.useState();
  const [successText, setSuccessText] = React.useState();

  const [albumFormData, setAlbumFormData] = React.useState<TFormAlbum | null>(
    null
  );

  const { submitAlbum } = useServices();

  const [submitState, onSubmit] = useAsync(submitAlbum);

  const [transformFilesState, onTransformFiles] = useAsync(
    getAlbumFormDataFromFiles
  );

  React.useEffect(() => {
    if (transformFilesState && transformFilesState.pending) {
      setSuccessText();
      setErrorText();
    }
    if (transformFilesState && transformFilesState.value) {
      setAlbumFormData(transformFilesState.value);
    }
    if (transformFilesState && transformFilesState.error) {
      setErrorText(transformFilesState.error.message);
    }
  }, [transformFilesState]);

  React.useEffect(() => {
    if (submitState && submitState.pending) {
      setAlbumFormData(null);
      setErrorText();
    }
    if (submitState && submitState.resolved) {
      setSuccessText("Album successfully shared.");
    }
    if (submitState && submitState.error) {
      setErrorText(submitState.error.message);
    }
  }, [submitState]);

  const handleSubmit = () => {
    if (albumFormData) {
      onSubmit(albumFormData);
    }
  };

  const handleFilesRecieved = (files: FileList) => {
    onTransformFiles(files);
  };

  const handleCancel = () => {
    setAlbumFormData(null);
  };

  const handleAlbumFormDataChange = (nextAlbum: TFormAlbum) => {
    setAlbumFormData(nextAlbum);
  };

  const hasPreloader =
    (!!submitState && submitState.pending) ||
    (!!transformFilesState && transformFilesState.pending);

  const hasAlbumEditor = !hasPreloader && albumFormData !== null;

  const hasDropZone = !hasPreloader && albumFormData === null;

  return {
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
  };
};
