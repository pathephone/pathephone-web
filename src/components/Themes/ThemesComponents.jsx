// @flow strict

import * as React from "react";

import styles from "./Themes.module.css";

type TProps = {|
  children: React.Node
|};

export const Theme = (props: TProps) => (
  <div {...props} className={styles.Theme} />
);
