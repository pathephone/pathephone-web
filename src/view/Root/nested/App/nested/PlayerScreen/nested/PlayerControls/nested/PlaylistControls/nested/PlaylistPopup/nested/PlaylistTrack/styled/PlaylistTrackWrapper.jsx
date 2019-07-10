// @flow strict

import * as React from "react";

import styles from "./Playlist.module.css";

type TProps = {|
  children: React.Node,
  playing: boolean
|};

export const PlaylistTrackWrapper = ({ children, playing }: TProps) => {
  return (
    <div
      className={`${styles.PlaylistTrack__Wrapper} ${
        playing ? styles.PlaylistTrack__Wrapper_playing : ""
      }`}
    >
      {children}
    </div>
  );
};
