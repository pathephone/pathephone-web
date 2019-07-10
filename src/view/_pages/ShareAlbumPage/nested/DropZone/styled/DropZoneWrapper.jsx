// @flow strict

import * as React from "react";

import styles from "./DropZone.module.css";

type TProps = {|
  children: React.Node
|};

export const DropZoneWrapper = ({ children }: TProps) => {
  return <div className={styles.DropZone__Wrapper}>{children}</div>;
};
