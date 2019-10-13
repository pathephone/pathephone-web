import * as React from "react";

import styles from "./PlaybackControls.module.css";

type TProps = {
  children: React.ReactNode;
  mod: "player" | "playlist";
};

export const PlaybackControlsGroup = ({ children, mod }: TProps) => {
  const className = (() => {
    let base = `${styles.PlaybackControls__Group}`;
    if (mod === "player") {
      return `${base} ${styles.PlaybackControls__Group_player}`;
    }
    if (mod === "playlist") {
      return `${base} ${styles.PlaybackControls__Group_playlist}`;
    }
  })();

  return <div className={className}>{children}</div>;
};
