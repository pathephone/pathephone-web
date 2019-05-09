// @flow strict

import * as React from "react";

import styles from "./AlbumEditor.module.css";

type TProps = {|
  children: string,
  isPrimary?: boolean,
  onClick(): void
|};

export const AlbumEditorButton = ({ children, isPrimary, onClick }: TProps) => (
  <button
    onClick={onClick}
    className={`${styles.AlbumEditor__Button} ${
      isPrimary === true
        ? styles.AlbumEditor__Button_primary
        : styles.AlbumEditor__Button_secondary
    }`}
  >
    {children}
  </button>
);
