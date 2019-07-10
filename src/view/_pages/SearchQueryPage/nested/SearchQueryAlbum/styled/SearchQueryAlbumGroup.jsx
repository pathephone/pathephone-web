// @flow strict

import * as React from "react";

import styles from "./SearchQueryAlbum.module.css";

type TProps = {|
  children: React.Node
|};

export const SearchQueryAlbumGroup = (props: TProps) => {
  const { children } = props;

  const className = `${styles.SearchQueryAlbum__Group}`;

  return <div className={className}>{children}</div>;
};
