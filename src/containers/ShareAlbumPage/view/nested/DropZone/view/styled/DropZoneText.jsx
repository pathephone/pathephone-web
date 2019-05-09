// @flow strict

import * as React from "react";

import styles from "./DropZone.module.css";

type TProps = {|
  mainText: string,
  errorText?: string,
  successText?: string
|};

export const DropZoneText = ({ mainText, errorText, successText }: TProps) => {
  return (
    <div className={styles.DropZone__Text}>
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
