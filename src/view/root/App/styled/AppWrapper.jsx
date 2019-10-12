// @flow strict

import * as React from "react";

import { testId } from "util/testId";

import styles from "./App.module.css";

type TProps = {|
  children: React.Node
|};

export const AppWrapper = ({ children }: TProps) => (
  <div className={styles.App__Wrapper} data-testid={testId.APP__WRAPPER}>
    {children}
  </div>
);
