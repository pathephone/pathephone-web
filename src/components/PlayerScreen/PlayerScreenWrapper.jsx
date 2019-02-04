// @flow strict

import * as React from "react";

import styles from "./PlayerScreen.module.css";

type TProps = {|
  children: React.Node
|};

export const PlayerScreenWrapper = (props: TProps) => (
  <div className={styles.App__Wrapper} {...props} />
);
