// @flow strict

import * as React from "react";

import styles from "./PlayerControls.module.css";

type TPanelProps = {|
  children: React.Node
|};

export const PlayerControlsPanel = (props: TPanelProps) => (
  <div className={styles.PlayerControls__Panel} {...props} />
);

type TButtonsGroupProps = {|
  children: React.Node,
  moveButtonsToRight?: boolean
|};

export const PlayerControlsButtonsGroup = ({
  moveButtonsToRight,
  ...nativeProps
}: TButtonsGroupProps) => (
  <div
    className={`${styles.PlayerControls__ButtonsGroup} ${
      moveButtonsToRight === true
        ? styles.PlayerControls__ButtonsGroup_toRight
        : ""
    }`}
    {...nativeProps}
  />
);

type TButtonProps = {|
  children: React.Node,
  onClick(): void
|};

export const PlayerControlsButton = (props: TButtonProps) => (
  <button className={styles.PlayerControls__Button} type="button" {...props} />
);

type TTrackInfoProps = {|
  title: string,
  artistName: string
|};

export const PlayerControlsTrackInfo = ({
  title,
  artistName
}: TTrackInfoProps) => (
  <div className={styles.PlayerControls__TrackInfo}>
    <div className={styles.PlayerControls__Title}>{title}</div>
    <div className={styles.PlayerControls__ArtistName}>{artistName}</div>
  </div>
);
