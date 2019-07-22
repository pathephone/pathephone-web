// @flow strict

import * as React from "react";

import styles from "./AlbumEditor.module.css";

type TProps = {|
  children: string,
  submit?: boolean,
  onClick?: () => void
|};

export const AlbumEditorButton = ({ children, submit, onClick }: TProps) => (
  <button
    onClick={onClick}
    className={`${styles.AlbumEditor__Button} ${
      submit === true
        ? styles.AlbumEditor__Button_primary
        : styles.AlbumEditor__Button_secondary
    }`}
    type={submit === true ? "submit" : "button"}
  >
    {children}
  </button>
);
