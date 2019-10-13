import * as React from "react";

import styles from "./Playlist.module.css";

type TProps = {
  children: React.ReactNode;
};

export const PlaylistPopupBody = (props: TProps) => (
  <div className={styles.PlaylistPopup__Body}>
    <div className={styles.PlaylistPopup__Content} {...props} />
  </div>
);
