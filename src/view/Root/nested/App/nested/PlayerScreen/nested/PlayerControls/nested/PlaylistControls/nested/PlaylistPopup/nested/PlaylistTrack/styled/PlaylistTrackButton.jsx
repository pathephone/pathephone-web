// @flow strict

import * as React from "react";

import styles from "./Playlist.module.css";

type TProps = {|
  children: React.Node,
  disabled: boolean,
  onClick(): void
|};

export const PlaylistTrackButton = ({
  children,
  disabled,
  onClick
}: TProps) => {
  return (
    <button
      disabled={disabled}
      className={styles.PlaylistTrack__Button}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
