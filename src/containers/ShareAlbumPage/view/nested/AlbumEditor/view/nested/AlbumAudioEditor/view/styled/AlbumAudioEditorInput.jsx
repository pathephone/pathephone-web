// @flow strict

import * as React from "react";

import styles from "./AlbumAudioEditor.module.css";

type TProps = {|
  onChange(e: SyntheticEvent<HTMLInputElement>): void
|};

export const AlbumAudioEditorInput = ({ onChange }: TProps) => (
  <input
    className={styles.AlbumAudioEditor__Input}
    type="file"
    name="tracks"
    onChange={onChange}
  />
);
