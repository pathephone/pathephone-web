// @flow strict

import * as React from "react";

import styles from "./Page.module.css";

type TProps = {|
  children: React.Node,
  centered?: boolean
|};

export const PageWrapper = ({ children, centered }: TProps) => (
  <main
    className={`${styles.Wrapper} ${
      centered === true ? styles.Wrapper_centered : ""
    }`}
  >
    {children}
  </main>
);
