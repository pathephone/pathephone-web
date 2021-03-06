import * as React from "react";

import styles from "./AlbumCover.module.css";

type TProps = {
  children: React.ReactNode;
};

export const AlbumCoverWrapper = (props: TProps) => {
  const { children } = props;
  return <div className={styles.AlbumCover__Wrapper}>{children}</div>;
};
