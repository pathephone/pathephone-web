// @flow strict

import * as React from "react";

import { DropZoneWrapper } from "./styled/DropZoneWrapper";
import { DropZoneLabel } from "./styled/DropZoneLabel";
import { DropZoneInput } from "./styled/DropZoneInput";
import { DropZoneText } from "./styled/DropZoneText";

type TProps = {|
  onChange(event: SyntheticEvent<HTMLInputElement>): void,
  mainText: string,
  errorText?: string,
  successText?: string
|};

export const DropZoneView = (props: TProps) => {
  const { onChange, mainText, errorText, successText } = props;

  return (
    <DropZoneWrapper>
      <DropZoneLabel>
        <DropZoneInput onChange={onChange} />
        <DropZoneText
          mainText={mainText}
          errorText={errorText}
          successText={successText}
        />
      </DropZoneLabel>
    </DropZoneWrapper>
  );
};
