// @flow strict

import * as React from "react";

import styles from "./AlbumCoverEditor.module.css";

type TProps = {|
  text: string
|};

export const AlbumCoverEditorError = ({ text }: TProps) => (
  <div className={styles.AlbumCoverEditor__Error}>{text}</div>
);
