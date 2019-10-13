import * as React from "react";

import styles from "./AlbumEditor.module.css";

type TProps = {
  children: React.ReactNode;
};

export const AlbumEditorFieldset = ({ children }: TProps) => (
  <div className={styles.AlbumEditor__Fieldset}>{children}</div>
);
