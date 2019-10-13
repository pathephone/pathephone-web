import * as React from "react";

import { DropZoneWrapper } from "./styled/DropZoneWrapper";
import { DropZoneLabel } from "./styled/DropZoneLabel";
import { DropZoneInput } from "./styled/DropZoneInput";
import { DropZoneText } from "./styled/DropZoneText";
import { useDispatch } from "hook/useDispatch";
import { useIntlDictionary } from "hook/useIntl";

type TProps = {
  errorText?: string;
  successText?: string;
};

export const DropZone = (props: TProps) => {
  const { errorText, successText } = props;

  const {
    dropZone: { mainText }
  } = useIntlDictionary();

  const dispatch = useDispatch();

  const onFilesChange = React.useCallback(
    (fileList: FileList) => {
      const files = [...fileList];
      dispatch({
        type: "DROP_ZONE__FILES_RECIEVED",
        payload: files
      });
    },
    [dispatch]
  );

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
