// @flow strict

import * as React from "react";

import styles from "./SearchAlbumsPage.module.css";

import { testId } from "utils/testId";
import { Spinner } from "view/Spinner/index";

export const SearchAlbumsPageLoader = () => {
  return (
    <div
      className={styles.SearchAlbumsPage__Loader}
      data-testid={testId.SEARCH_ALBUMS_PAGE__LOADER}
    >
      <Spinner />
    </div>
  );
};
