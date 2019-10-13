import * as React from "react";

import styles from "./AlbumCoverEditor.module.css";

type TProps = {
  src: string;
};

export const AlbumCoverEditorImage = ({ src }: TProps) => (
  <img src={src} className={styles.AlbumCoverEditor__Image} alt="cover" />
);
