// @flow strict

import * as React from "react";

import styles from "./ThemeProvider.module.css";

type TProps = {|
  children: React.Node
|};

export const ThemeProviderWrapper = ({ children }: TProps) => (
  <div className={styles.ThemeProvider__Wrapper}>{children}</div>
);
