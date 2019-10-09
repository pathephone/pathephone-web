// @flow strict

import * as React from "react";

import styles from "./AlbumsFeed.module.css";

type TProps = {|
  onClick(): void,
  text: string
|};

export const AlbumsFeedButton = ({ onClick, text }: TProps) => (
  <button className={styles.AlbumsFeed__Button} onClick={onClick}>
    {text}
  </button>
);
