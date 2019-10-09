// @flow strict

import * as React from "react";

import styles from "./AlbumTrackEditor.module.css";

type TProps = {|
  children: React.Node
|};

export const AlbumTrackEditorControls = (props: TProps) => (
  <div {...props} className={styles.AlbumTrackEditor__Controls} />
);
