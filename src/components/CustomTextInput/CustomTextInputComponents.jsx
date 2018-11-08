// @flow strict

import * as React from "react";

import styles from "./CustomTextInput.module.css";

type TProps = {
  label: string,
  name: string,
  value: string,
  onChange(e: SyntheticEvent<HTMLInputElement>): void
};

export const CustomTextInput = ({ label, name, value, onChange }: TProps) => (
  <label>
    {label}
    <br />
    <input
      type="text"
      className={styles.CustomTextInput__Input}
      name={name}
      placeholder={label}
      value={value}
      onChange={onChange}
    />
  </label>
);
