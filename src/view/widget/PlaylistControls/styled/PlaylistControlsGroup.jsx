// @flow strict

import * as React from "react";

import styles from "./PlaylistControls.module.css";

type TProps = {|
  children: React.Node,
  mod: "skip" | "close"
|};

export const PlaylistControlsGroup = ({ mod, children }: TProps) => {
  const className = (() => {
    let base = `${styles.PlaylistControls__Group}`;
    if (mod === "skip") {
      return `${base} ${styles.PlaylistControls__Group_skip}`;
    }
    if (mod === "close") {
      return `${base} ${styles.PlaylistControls__Group_player}`;
    }
  })();

  return <div className={className}>{children}</div>;
};
