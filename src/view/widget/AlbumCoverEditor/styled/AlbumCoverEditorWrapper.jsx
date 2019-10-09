// @flow strict

import * as React from "react";

import styles from "./AlbumCoverEditor.module.css";

type TProps = {|
  children: React.Node
|};

export const AlbumCoverEditorWrapper = ({ children }: TProps) => (
  <label className={styles.AlbumCoverEditor__Wrapper}>{children}</label>
);
