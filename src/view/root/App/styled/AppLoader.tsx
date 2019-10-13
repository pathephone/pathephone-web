import * as React from "react";

import { testId } from "util/testId";
import { Spinner } from "view/kit/Spinner";

import styles from "./App.module.css";

export const AppLoader = () => (
  <div data-testid={testId.APP__LOADER} className={styles.App__Loader}>
    <Spinner />
  </div>
);
