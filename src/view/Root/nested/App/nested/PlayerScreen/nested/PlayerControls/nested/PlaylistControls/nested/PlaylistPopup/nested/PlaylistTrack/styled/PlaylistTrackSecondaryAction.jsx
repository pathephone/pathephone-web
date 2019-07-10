// @flow strict

import * as React from "react";

import styles from "./Playlist.module.css";

type TProps = {|
  children: React.Node
|};

export const PlaylistTrackSecondaryAction = ({ children }: TProps) => {
  return (
    <div className={styles.PlaylistTrack__SecondaryAction}>{children}</div>
  );
};
