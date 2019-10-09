// @flow strict

import * as React from "react";

import styles from "./Playlist.module.css";

import { SquareButton } from "view/kit/SquareButton";
import { ClearAllIcon } from "icons/round-clear_all";

type TProps = {|
  tracksCount: number,
  onClearPlaylist(): void
|};

export const PlaylistPopupHeader = ({
  tracksCount,
  onClearPlaylist
}: TProps) => (
  <div className={styles.PlaylistPopup__Header}>
    <div className={styles.PlaylistPopup__Count}>{tracksCount} tracks</div>
    <div className={styles.PlaylistPopup__Button}>
      <SquareButton onClick={onClearPlaylist}>
        <ClearAllIcon />
      </SquareButton>
    </div>
  </div>
);
