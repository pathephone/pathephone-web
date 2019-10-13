import * as React from "react";

import styles from "./ThemeProvider.module.css";

type TProps = {
  children: React.ReactNode;
};

export const ThemeProviderWrapper = ({ children }: TProps) => (
  <div className={styles.ThemeProvider__Wrapper}>{children}</div>
);
