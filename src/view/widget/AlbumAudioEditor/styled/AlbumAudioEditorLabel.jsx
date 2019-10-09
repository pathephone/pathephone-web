// @flow strict

import * as React from "react";

import styles from "./AlbumAudioEditor.module.css";

type TProps = {|
  text: string,
  validationMessage?: string,
  validationTestId?: string
|};

export const AlbumAudioEditorLabel = ({
  text,
  validationMessage,
  validationTestId
}: TProps) => (
  <div className={styles.AlbumAudioEditor__Label}>
    <div className={styles.AlbumAudioEditor__Text}>{text}</div>
    <small
      className={styles.AlbumAudioEditor__Error}
      data-testid={validationTestId}
    >
      {validationMessage}
    </small>
  </div>
);
