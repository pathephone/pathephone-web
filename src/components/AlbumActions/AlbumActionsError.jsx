// @flow strict

import * as React from "react";

import styles from "./AlbumActions.module.css";

type TProps = {|
  children: string
|};

export const AlbumActionsError = (props: TProps) => (
  <p className={styles.AlbumActions__Error}>{props.children}</p>
);
