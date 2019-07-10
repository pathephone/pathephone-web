// @flow strict

import * as React from "react";

import styles from "./AlbumCover.module.css";

type TProps = {|
  onClick(): void,
  children: React.Node
|};

export const AlbumCoverButton = (props: TProps) => {
  const { children, onClick } = props;
  return (
    <button className={styles.AlbumCover__Button} onClick={onClick}>
      {children}
    </button>
  );
};
