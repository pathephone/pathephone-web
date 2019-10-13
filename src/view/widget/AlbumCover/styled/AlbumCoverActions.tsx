import * as React from "react";

import styles from "./AlbumCover.module.css";

type TProps = {
  children: React.ReactNode;
};

export const AlbumCoverActions = (props: TProps) => {
  const { children } = props;
  return <div className={styles.AlbumCover__Actions}>{children}</div>;
};
