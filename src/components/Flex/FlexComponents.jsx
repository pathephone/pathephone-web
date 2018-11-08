// @flow strict

import * as React from "react";

import styles from "./Flex.module.css";

type TProps = {|
  children: React.Node
|};

export const Left = (props: TProps) => (
  <div className={styles.Flex__Left} {...props} />
);

export const Right = (props: TProps) => (
  <div className={styles.Flex__Right} {...props} />
);
