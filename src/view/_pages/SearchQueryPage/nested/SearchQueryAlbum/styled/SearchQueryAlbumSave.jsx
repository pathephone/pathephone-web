// @flow strict

import * as React from "react";

import styles from "./SearchQueryAlbum.module.css";

type TProps = {|
  text: string,
  hidden: boolean,
  onClick(): void
|};

export const SearchQueryAlbumSave = (props: TProps) => {
  const { text, hidden, onClick } = props;

  const className = `${styles.SearchQueryAlbum__Button} ${
    styles.SearchQueryAlbum__Button_save
  } ${hidden ? styles.SearchQueryAlbum__Button_hidden : ""}`;

  return (
    <button className={className} disabled={hidden} onClick={onClick}>
      {text}
    </button>
  );
};
