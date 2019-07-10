// @flow strict

import React from "react";

import { GetIcon } from "icons/round-get_app";

import styles from "./Playlist.module.css";

export const PlaylistTrackCachingIndicator = () => {
  return (
    <div className={styles.PlaylistTrack__CachingIndicator}>
      <GetIcon />
    </div>
  );
};
