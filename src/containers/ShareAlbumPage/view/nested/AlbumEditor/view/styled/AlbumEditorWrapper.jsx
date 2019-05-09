// @flow strict

import * as React from "react";

import styles from "./AlbumEditor.module.css";

type TProps = {|
  children: React.Node,
  onSubmit(e: SyntheticEvent<HTMLFormElement>): void
|};

export const AlbumEditorWrapper = (props: TProps) => (
  <form {...props} className={styles.AlbumEditor__Wrapper} />
);
