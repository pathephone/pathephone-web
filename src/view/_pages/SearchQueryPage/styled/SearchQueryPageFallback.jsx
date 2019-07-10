// @flow strict

import * as React from "react";

import { testId } from "utils/testId";

import styles from "./SearchQueryPage.module.css";

type TProps = {
  text: string
};

export const SearchQueryPageFallback = ({ text }: TProps) => {
  return (
    <div
      className={styles.SearchQueryPage__Fallback}
      data-testid={testId.SEARCH_QUERY_PAGE__FALLBACK}
    >
      {text}
    </div>
  );
};
