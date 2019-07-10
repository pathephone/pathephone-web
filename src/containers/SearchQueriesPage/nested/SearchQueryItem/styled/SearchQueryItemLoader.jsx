// @flow strict

import * as React from "react";

import { Spinner } from "components/Spinner/index";

import styles from "./SearchQueryItem.module.css";
import { testId } from "utils/testId";

export const SearchQueryItemLoader = () => {
  return (
    <div
      className={styles.SearchQueryItem__Loader}
      data-testid={testId.SEARCH_QUERY_ITEM__LOADER}
    >
      <Spinner />
    </div>
  );
};
