// @flow strict

import * as React from "react";

import styles from "./PlaybackControls.module.css";

type TProps = {|
  children: React.Node
|};

export const PlaybackControlsWrapper = (props: TProps) => (
  <div className={styles.PlaybackControls__Wrapper} {...props} />
);
