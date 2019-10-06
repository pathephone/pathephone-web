// @flow strict

import * as React from "react";

import styles from "./SearchAlbumsPage.module.css";

import { Spinner } from "view/Spinner/index";

type TProps = {|
  testId: string
|};

export const SearchAlbumsPageLoader = ({ testId }: TProps) => {
  return (
    <span className={styles.SearchAlbumsPage__Loader} data-testid={testId}>
      <Spinner />
    </span>
  );
};
