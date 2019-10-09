// @flow strict

import React from "react";

import styles from "./Playlist.module.css";

type TProps = {|
  artistName: string,
  title: string
|};

export const PlaylistTrackInfo = ({ artistName, title }: TProps) => {
  return (
    <div className={styles.PlaylistTrack__Info}>
      <div className={styles.PlaylistTrack__Title}>{title}</div>
      <div className={styles.PlaylistTrack__Artist}>{artistName}</div>
    </div>
  );
};
