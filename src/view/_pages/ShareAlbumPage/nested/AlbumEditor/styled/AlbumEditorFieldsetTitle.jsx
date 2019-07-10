// @flow strict

import * as React from "react";

import styles from "./AlbumEditor.module.css";

type TProps = {|
  text: string
|};

export const AlbumEditorFieldsetTitle = ({ text }: TProps) => (
  <div className={styles.AlbumEditor__FieldsetTitle}>{text}</div>
);
