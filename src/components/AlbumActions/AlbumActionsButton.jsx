// @flow strict

import * as React from "react";

import styles from "./AlbumActions.module.css";

type TProps = {|
  children: string,
  onClick(e: SyntheticEvent<HTMLButtonElement>): void
|};

export const AlbumActionsButton = ({ children, onClick }: TProps) => (
  <button
    type="button"
    className={styles.AlbumActions__Button}
    onClick={onClick}
  >
    {children}
  </button>
);
