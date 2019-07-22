// @flow strict

import React from "react";

import { Spinner } from "view/Spinner/index";

import { testId } from "utils/testId";

import styles from "./Page.module.css";

export const PageLoader = () => (
  <div className={styles.Page__Loader} data-testid={testId.PAGE_LOADER}>
    <Spinner />
  </div>
);
