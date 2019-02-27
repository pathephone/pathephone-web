// @flow strict

import * as React from "react";

import styles from "./Flex.module.css";

type TProps = {|
  children: React.Node
|};

export const FlexRow = (props: TProps) => (
  <div className={styles.Flex__Row} {...props} />
);

export const Left = (props: TProps) => (
  <div className={styles.Flex__Left} {...props} />
);

export const Right = (props: TProps) => (
  <div className={styles.Flex__Right} {...props} />
);

export const FlexCenter = (props: TProps) => (
  <div className={styles.Flex__Center} {...props} />
);
