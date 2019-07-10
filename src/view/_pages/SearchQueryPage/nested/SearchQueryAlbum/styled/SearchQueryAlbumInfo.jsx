// @flow strict

import * as React from "react";

import styles from "./SearchQueryAlbum.module.css";

type TProps = {|
  title: string,
  artist: string
|};

export const SearchQueryAlbumInfo = (props: TProps) => {
  const { title, artist } = props;

  return (
    <div className={styles.SearchQueryAlbum__Info}>
      <div className={styles.SearchQueryAlbum__Title}>{title}</div>
      <div className={styles.SearchQueryAlbum__Artist}>{artist}</div>
    </div>
  );
};
