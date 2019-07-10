// @flow strict

import * as React from "react";

import { ClearIcon } from "icons/round-clear";

import styles from "./SearchQueryAlbum.module.css";

type TProps = {|
  onClick(): void
|};

export const SearchQueryAlbumDelete = (props: TProps) => {
  const { onClick } = props;

  const className = `${styles.SearchQueryAlbum__Button} ${
    styles.SearchQueryAlbum__Button_delete
  }`;

  return (
    <button className={className} onClick={onClick}>
      <ClearIcon />
    </button>
  );
};
