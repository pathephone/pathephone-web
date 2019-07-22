// @flow strict

import * as React from "react";

import styles from "./AlbumTrackEditor.module.css";

import { testId } from "utils/testId";

type TProps = {|
  children: React.Node
|};

export const AlbumTrackEditorWrapper = (props: TProps) => (
  <div
    {...props}
    className={styles.AlbumTrackEditor__Wrapper}
    data-testid={testId.ALBUM_TRACK_EDITOR__WRAPPER}
  />
);
