// @flow strict

import * as React from "react";

import styles from "./Header.module.css";

type TProps = {|
  children: React.Node
|};

export const HeaderWrapper = (props: TProps) => (
  <header className={styles.Header__Wrapper}>{props.children}</header>
);
