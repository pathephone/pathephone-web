// @flow strict

import * as React from "react";

import styles from "./PlaybackControls.module.css";

type TProps = {|
  children: React.Node,
  toRight?: boolean
|};

export const PlaybackControlsGroup = ({ children, toRight }: TProps) => {
  const className = `${styles.PlayerControls__Group} ${
    toRight === true ? styles.PlayerControls__Group_toRight : ""
  }`;

  return <div className={className}>{children}</div>;
};
