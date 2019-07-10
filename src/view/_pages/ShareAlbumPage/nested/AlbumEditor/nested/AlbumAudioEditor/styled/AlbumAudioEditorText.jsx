// @flow strict

import * as React from "react";

import styles from "./AlbumAudioEditor.module.css";

type TProps = {|
  children: string
|};

export const AlbumAudioEditorText = ({ children }: TProps) => (
  <div className={styles.AlbumAudioEditor__Text}>{children}</div>
);
