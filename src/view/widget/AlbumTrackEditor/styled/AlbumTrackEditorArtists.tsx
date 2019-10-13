import * as React from "react";

import styles from "./AlbumTrackEditor.module.css";

type TProps = {
  children: React.ReactNode;
};

export const AlbumTrackEditorArtists = (props: TProps) => (
  <div {...props} className={styles.AlbumTrackEditor__Artists} />
);
