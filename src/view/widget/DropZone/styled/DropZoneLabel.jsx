// @flow strict

import * as React from "react";

import styles from "./DropZone.module.css";

type TProps = {|
  children: React.Node
|};

export const DropZoneLabel = ({ children }: TProps) => {
  return <label className={styles.DropZone__Label}>{children}</label>;
};
