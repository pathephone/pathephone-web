// @flow strict

import * as React from "react";

import styles from "./AlbumCover.module.css";

type TProps = {|
  src: string
|};

export const AlbumCoverImage = (props: TProps) => {
  const { src } = props;
  return <img alt="TODO" src={src} className={styles.AlbumCover__Image} />;
};
