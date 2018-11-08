// @flow strict

import * as React from "react";

import styles from "./App.module.css";

type TProps = {|
  children: React.Node
|};

export const AppWrapper = (props: TProps) => (
  <div className={styles.App__Wrapper} {...props} />
);
