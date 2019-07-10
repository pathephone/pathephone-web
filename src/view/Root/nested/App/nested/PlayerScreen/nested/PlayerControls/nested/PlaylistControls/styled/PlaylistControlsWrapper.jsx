// @flow strict

import * as React from "react";

import styles from "./PlaylistControls.module.css";

type TProps = {|
  children: React.Node,
  toRight?: boolean
|};

export const PlaylistControlsWrapper = ({ toRight, children }: TProps) => {
  const className = `${styles.PlaylistControls__Wrapper} ${
    toRight === true ? styles.PlaylistControls__Wrapper_toRight : ""
  }`;

  return <div className={className}>{children}</div>;
};
