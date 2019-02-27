// @flow strict

import * as React from "react";

import styles from "./PlaybackControls.module.css";

type TWrapperProps = {|
  children: React.Node
    |};

export const PlaybackControlsWrapper = (props: TWrapperProps) => (
  <div className={styles.PlaybackControls__Wrapper} {...props} />
);

type TGroupProps = {|
  children: React.Node
    |};

export const PlaybackControlsGroup = (props: TGroupProps) => (
  <div className={styles.PlaybackControls__Group} {...props} />
);

type TButtonProps = {|
  children: React.Node;
onClick(): void;
    |};

export const PlaybackControlsButton = (props: TButtonProps) => (
  <button className={styles.PlaybackControls__Button} type="button" {...props} />
);

type TTrackInfoProps = {|
  title: string;
artistName: string;
    |};

export const PlaybackControlsTrackInfo = ({ title, artistName }: TTrackInfoProps) => (
  <div className={styles.PlaybackControls__TrakInfo}>
    <div className={styles.PlaybackControls__Title}>{title}</div>
    <div className={styles.PlaybackControls__ArtistName}>{artistName}</div>
  </div>
);