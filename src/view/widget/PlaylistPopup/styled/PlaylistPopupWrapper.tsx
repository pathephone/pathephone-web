import * as React from "react";

import styles from "./Playlist.module.css";

type TProps = {
  children: React.ReactNode;
};

export const PlaylistPopupWrapper = (props: TProps) => (
  <div className={styles.PlaylistPopup__Wrapper} {...props} />
);
