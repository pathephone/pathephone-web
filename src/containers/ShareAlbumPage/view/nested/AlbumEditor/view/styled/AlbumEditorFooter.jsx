// @flow strict

import * as React from "react";

import styles from "./AlbumEditor.module.css";

type TProps = {|
  children: React.Node
|};

export const AlbumEditorFooter = ({ children }: TProps) => (
  <div className={styles.AlbumEditor__Footer}>{children}</div>
);
