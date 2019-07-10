// @flow strict

import * as React from "react";

import styles from "./AlbumCoverEditor.module.css";

type TProps = {|
  children: React.Node
|};

export const AlbumCoverEditorPreview = (props: TProps) => (
  <div className={styles.AlbumCoverEditor__Preview} {...props} />
);
