// @flow strict

import * as React from "react";

import styles from "./SearchQueryPage.module.css";

import { testId } from "utils/testId";
import { Spinner } from "components/Spinner/index";

export const SearchQueryPageLoader = () => {
  return (
    <div
      className={styles.SearchQueryPage__Loader}
      data-testid={testId.SEARCH_QUERY_PAGE__LOADER}
    >
      <Spinner />
    </div>
  );
};
