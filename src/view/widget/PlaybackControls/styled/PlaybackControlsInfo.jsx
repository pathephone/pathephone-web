// @flow strict

import * as React from "react";

import styles from "./PlaybackControls.module.css";

type TProps = {|
  title: string,
  artistName: string
|};

export const PlaybackControlsInfo = ({ title, artistName }: TProps) => (
  <div className={styles.PlaybackControls__Info}>
    <span className={styles.PlaybackControls__Title}>{title}</span>
    <span className={styles.PlaybackControls__Artist}>{artistName}</span>
  </div>
);
