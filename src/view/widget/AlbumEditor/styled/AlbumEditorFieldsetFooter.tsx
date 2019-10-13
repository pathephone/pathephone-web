import * as React from "react";

import styles from "./AlbumEditor.module.css";

type TProps = {
  children: React.ReactNode;
};

export const AlbumEditorAboutFieldsetFooter = ({ children }: TProps) => (
  <div className={styles.AlbumEditor__FieldsetFooter}>{children}</div>
);
