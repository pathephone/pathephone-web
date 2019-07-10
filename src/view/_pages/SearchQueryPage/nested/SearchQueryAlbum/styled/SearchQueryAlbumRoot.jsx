// @flow strict

import * as React from "react";

import { testId } from "utils/testId";

import styles from "./SearchQueryAlbum.module.css";

type TProps = {|
  children: React.Node
|};

export const SearchQueryAlbumRoot = ({ children }: TProps) => {
  const className = `${styles.SearchQueryAlbum__Root}`;

  return (
    <div
      className={className}
      data-testid={testId.SEARCH_QUERY_ALBUM__ROOT_WRAPPER}
    >
      {children}
    </div>
  );
};
