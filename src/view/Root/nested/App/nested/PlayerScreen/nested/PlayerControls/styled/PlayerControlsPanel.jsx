// @flow strict

import * as React from "react";

import styles from "./PlayerControls.module.css";

type TProps = {|
  children: React.Node
|};

export const PlayerControlsPanel = ({ children }: TProps) => (
  <div className={styles.PlayerControls__Panel}>{children}</div>
);
