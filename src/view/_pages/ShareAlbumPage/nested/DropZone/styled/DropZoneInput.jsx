// @flow strict

import * as React from "react";

import styles from "./DropZone.module.css";
import { testId } from "utils/testId";

type TProps = {|
  onFilesChange(files: FileList): void
|};

export const DropZoneInput = ({ onFilesChange }: TProps) => {
  const onChange = React.useCallback(
    (event: SyntheticEvent<HTMLInputElement>) => {
      onFilesChange(event.currentTarget.files);
      event.currentTarget.value = "";
    },
    [onFilesChange]
  );

  return (
    <input
      type="file"
      multiple
      className={styles.DropZone__Input}
      onChange={onChange}
      data-testid={testId.SHARE_ALBUM_PAGE__DROP_ZONE_INPUT}
    />
  );
};
