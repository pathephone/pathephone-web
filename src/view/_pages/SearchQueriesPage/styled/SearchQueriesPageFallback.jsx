// @flow strict

import * as React from "react";

import { testId } from "utils/testId";

import styles from "./SearchQueriesPage.module.css";

type TProps = {
  text: string
};

export const SearchQueriesPageFallback = (props: TProps) => {
  const { text } = props;

  return (
    <div
      className={styles.SearchQueriesPage__Fallback}
      data-testid={testId.SEARCH_QUERIES_PAGE__FALLBACK}
    >
      {text}
    </div>
  );
};
