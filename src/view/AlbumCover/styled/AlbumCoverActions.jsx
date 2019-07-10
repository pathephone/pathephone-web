// @flow strict

import * as React from "react";

import styles from "./AlbumCover.module.css";

type TProps = {|
  children: React.Node
|};

export const AlbumCoverActions = (props: TProps) => {
  const { children } = props;
  return <div className={styles.AlbumCover__Actions}>{children}</div>;
};
