// @flow strict

import type { TServicesContext } from "types/contextTypes";
import type { TFormAlbum } from "types/stateTypes";

import * as React from "react";

import { ServicesContext } from "contexts/ServicesContext";
import { useContextStrict } from "hooks/useContextStrict";
import { useAsync } from "hooks/useAsync";
import { getAlbumFormDataFromFiles } from "utils/getAlbumFormDataFromFiles";

export const useShareAlbumPageState = () => {
  const [errorText, setErrorText] = React.useState();
  const [successText, setSuccessText] = React.useState();

  const [albumFormData, setAlbumFormData] = React.useState<TFormAlbum | null>(
    null
  );

  const { submitAlbum } = useContextStrict<TServicesContext>(ServicesContext);

  const [submitState, onSubmit] = useAsync(submitAlbum, { throwError: false });

  const [transformFilesState, onTransformFiles] = useAsync(
    getAlbumFormDataFromFiles,
    { throwError: false }
  );

  React.useEffect(() => {
    if (transformFilesState && transformFilesState.pending) {
      setSuccessText();
      setErrorText();
    }
    if (transformFilesState && transformFilesState.data) {
      setAlbumFormData(transformFilesState.data);
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
