// @flow strict

import * as React from "react";

import { testId } from "utils/testId";

import styles from "./SearchQueriesPage.module.css";

type TProps = {
  children: React.Node
};

export const SearchQueriesPageFeed = (props: TProps) => {
  const { children } = props;

  return (
    <div
      className={styles.SearchQueriesPage__Feed}
      data-testid={testId.SEARCH_QUERIES_PAGE__FEED}
    >
      {children}
    </div>
  );
};
