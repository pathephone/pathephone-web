// @flow strict

import React from "react";

import { Spinner } from "components/Spinner/index";

import styles from "./Page.module.css";
import { testId } from "utils/testId";

export const PageLoader = () => (
  <div className={styles.Page__Loader} data-testid={testId.PAGE_LOADER}>
    <Spinner />
  </div>
);
