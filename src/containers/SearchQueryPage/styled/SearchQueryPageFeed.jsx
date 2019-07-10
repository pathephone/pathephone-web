// @flow strict

import * as React from "react";

import { testId } from "utils/testId";

import styles from "./SearchQueryPage.module.css";

type TProps = {
  children: React.Node
};

export const SearchQueryPageFeed = ({ children }: TProps) => {
  return (
    <div
      className={styles.SearchQueryPage__Feed}
      data-testid={testId.SEARCH_QUERY_PAGE__FEED}
    >
      {children}
    </div>
  );
};
