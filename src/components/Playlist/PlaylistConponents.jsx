// @flow strict

import * as React from "react";

import styles from "./Playlist.module.css";

import { SquareButton } from "components/SquareButton/SquareButtonComponents";
import { ClearAllIcon } from "icons/round-clear_all";
import { DeleteIcon } from "icons/round-delete";
import { GetIcon } from "icons/round-get_app";
import { RoundButton } from "components/RoundButton/RoundButtonComponents";

type TPopupProps = {|
  children: React.Node
|};

export const PlaylistPopup = (props: TPopupProps) => (
  <div className={styles.Playlist__Popup} {...props} />
);

type THeaderProps = {|
  tracksCount: number,
  onClearPlaylist(): void
|};

export const PlaylistHeader = ({
  tracksCount,
  onClearPlaylist
}: THeaderProps) => (
  <div className={styles.Playlist__Header}>
    <div className={styles.Playlist__TracksCount}>{tracksCount} tracks</div>
    <div className={styles.Playlist__ClearButton}>
      <SquareButton onClick={onClearPlaylist}>
        <ClearAllIcon />
      </SquareButton>
    </div>
  </div>
);

type TBodyProps = {|
  children: React.Node
|};

export const PlaylistBody = (props: TBodyProps) => (
  <div className={styles.Playlist__Body}>
    <div className={styles.Playlist__BodyContent} {...props} />
  </div>
);

type TTrackProps = {|
  artistName: string,
  title: string,
  isPlayButtonDisabled: boolean,
  hasPlayingIndicator: boolean,
  hasCachingIndicator: boolean,
  onPlay(): void,
  onRemove(): void
|};

export const PlaylistTrack = ({
  artistName,
  title,
  isPlayButtonDisabled,
  hasPlayingIndicator,
  hasCachingIndicator,
  onPlay,
  onRemove
}: TTrackProps) => (
  <div
    className={`${styles.Playlist__Track} ${
      hasPlayingIndicator ? styles.Playlist__Track_playing : ""
    }`}
  >
    <button
      disabled={isPlayButtonDisabled}
      className={styles.Playlist__PlayButton}
      type="button"
      onClick={onPlay}
    >
      {hasCachingIndicator && (
        <div className={styles.Playlist__CachingIndicator}>
          <GetIcon />
        </div>
      )}
      <div className={styles.Playlist__TrackInfo}>
        <div className={styles.Playlist__TrackTitle}>{title}</div>
        <div className={styles.Playlist__TrackArtist}>{artistName}</div>
      </div>
    </button>
    <div className={styles.Playlist__SecondaryTrackAction}>
      <RoundButton onClick={onRemove}>
        <DeleteIcon />
      </RoundButton>
    </div>
  </div>
);
