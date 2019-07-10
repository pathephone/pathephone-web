// @flow strict

import * as React from "react";

import styles from "./FloatingLabelInput.module.css";

type TProps = {
  name: string,
  value: string,
  placeholder: string,
  validationMessage?: string,
  onChange(event: SyntheticEvent<HTMLInputElement>): void
};

export const FloatingLabelInput = ({
  validationMessage,
  ...nativeProps
}: TProps) => (
  <label className={styles.FloatingLabelInput__Wrapper}>
    <input className={styles.FloatingLabelInput__Input} {...nativeProps} />
    <span className={styles.FloatingLabelInput__Placeholder}>
      {nativeProps.placeholder}
    </span>
    <small className={styles.FloatingLabelInput__ValidationMessage}>
      {validationMessage}
    </small>
  </label>
);
