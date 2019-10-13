import * as React from "react";

import styles from "./Page.module.css";
import { testId } from "util/testId";

type TProps = {
  children: React.ReactNode;
  hasCompactView?: boolean;
  centered?: boolean;
  testId?: string;
};

export const PageWrapper = ({ children, centered, hasCompactView }: TProps) => (
  <main
    className={`${styles.Page__Wrapper} ${
      centered === true ? styles.Page__Wrapper_centered : ""
    } ${hasCompactView === true ? styles.Page__Wrapper_compact : ""}`}
    data-testid={testId.PAGE_WRAPPER}
  >
    {children}
  </main>
);
