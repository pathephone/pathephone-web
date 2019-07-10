// @flow strict

import React from "react";

import { DropZoneView } from "./DropZoneView";

type TProps = {|
  onFilesRecieved(data: FileList): void,
  errorText?: string,
  successText?: string
|};

export const DropZone = (props: TProps) => {
  const { onFilesRecieved, errorText, successText } = props;

  const onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    onFilesRecieved(files);
    e.currentTarget.value = "";
  };

  const mainText = "Click to select album files or drag’n’drop files here";

  const viewProps = {
    errorText,
    successText,
    onChange,
    mainText
  };

  return <DropZoneView {...viewProps} />;
};
