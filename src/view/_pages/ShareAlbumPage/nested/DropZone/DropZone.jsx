// @flow strict

import * as React from "react";

import { DropZoneWrapper } from "./styled/DropZoneWrapper";
import { DropZoneLabel } from "./styled/DropZoneLabel";
import { DropZoneInput } from "./styled/DropZoneInput";
import { DropZoneText } from "./styled/DropZoneText";
import { useDispatch } from "hooks/useDispatch";

type TProps = {|
  errorText?: string,
  successText?: string
|};

export const DropZone = (props: TProps) => {
  const { errorText, successText } = props;

  const dispatch = useDispatch();

  const onFilesChange = React.useCallback(
    (files: FileList) => {
      dispatch({
        type: "DROP_ZONE__FILES_RECIEVED",
        payload: files
      });
    },
    [dispatch]
  );

  const mainText = "Click to select album files or drag’n’drop files here";

  return (
    <DropZoneWrapper>
      <DropZoneLabel>
        <DropZoneInput onFilesChange={onFilesChange} />
        <DropZoneText
          mainText={mainText}
          errorText={errorText}
          successText={successText}
        />
      </DropZoneLabel>
    </DropZoneWrapper>
  );
};
