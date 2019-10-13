import * as React from "react";

import styles from "./DropZone.module.css";
import { testId } from "util/testId";

type TProps = {
  mainText: string;
  errorText?: string;
  successText?: string;
};

export const DropZoneText = ({ mainText, errorText, successText }: TProps) => {
  return (
    <div
      className={styles.DropZone__Text}
      data-testid={testId.SHARE_ALBUM_PAGE__DROP_ZONE_TEXT}
    >
      {errorText !== undefined && (
        <div className={styles.DropZone__ErrorText}>{errorText}</div>
      )}
      {successText !== undefined && (
        <div className={styles.DropZone__SuccessText}>{successText}</div>
      )}
      <div className={styles.DropZone__MainText}>{mainText}</div>
    </div>
  );
};
