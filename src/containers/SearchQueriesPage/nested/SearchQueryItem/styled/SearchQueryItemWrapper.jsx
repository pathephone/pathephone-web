// @flow strict

import * as React from "react";

import { testId } from "utils/testId";

import styles from "./SearchQueryItem.module.css";

type TProps = {|
  children: React.Node
|};

export const SearchQueryItemWrapper = (props: TProps) => {
  const { children } = props;
  return (
    <div
      className={styles.SearchQueryItem__Wrapper}
      data-testid={testId.SEARCH_QUERY_ITEM__WRAPPER}
    >
      {children}
    </div>
  );
};
