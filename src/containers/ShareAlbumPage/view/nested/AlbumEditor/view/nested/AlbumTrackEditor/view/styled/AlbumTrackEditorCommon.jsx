// @flow strict

import * as React from "react";

import styles from "./AlbumTrackEditor.module.css";

type TProps = {|
  children: React.Node
|};

export const AlbumTrackEditorCommon = (props: TProps) => (
  <div {...props} className={styles.AlbumTrackEditor__Common} />
);
