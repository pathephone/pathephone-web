// @flow strict

import * as React from "react";

import styles from "./SearchQueryPage.module.css";

import { testId } from "utils/testId";

type TProps = {
  title: string,
  children: React.Node
};

export const SearchQueryPageHero = ({ children, title }: TProps) => {
  return (
    <div className={styles.SearchQueryPage__Hero}>
      <h1
        className={styles.SearchQueryPage__Title}
        data-testid={testId.SEARCH_QUERY_PAGE__TITLE}
      >
        {title}
      </h1>
      <div className={styles.SearchQueryPage__Action}>{children}</div>
    </div>
  );
};
