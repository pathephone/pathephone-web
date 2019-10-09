// @flow strict

import * as React from "react";

import styles from "./Playlist.module.css";

type TProps = {|
  children: React.Node
|};

export const PlaylistPopupWrapper = (props: TProps) => (
  <div className={styles.PlaylistPopup__Wrapper} {...props} />
);
