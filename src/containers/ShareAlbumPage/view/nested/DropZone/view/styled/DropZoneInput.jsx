// @flow strict

import * as React from "react";

import styles from "./DropZone.module.css";

type TProps = {|
  onChange(e: SyntheticEvent<HTMLInputElement>): void
|};

export const DropZoneInput = ({ onChange }: TProps) => {
  return (
    <input
      type="file"
      multiple
      className={styles.DropZone__Input}
      onChange={onChange}
    />
  );
};
