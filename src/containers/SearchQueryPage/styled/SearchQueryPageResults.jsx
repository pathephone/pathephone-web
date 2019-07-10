// @flow strict

import * as React from "react";

import styles from "./SearchQueryPage.module.css";

type TProps = {
  children: React.Node
};

export const SearchQueryPageResults = ({ children }: TProps) => {
  return <div className={styles.SearchQueryPage__Results}>{children}</div>;
};
