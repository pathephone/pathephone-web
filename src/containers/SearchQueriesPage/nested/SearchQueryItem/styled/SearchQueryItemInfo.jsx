// @flow strict

import * as React from "react";

import styles from "./SearchQueryItem.module.css";

type TProps = {
  children: React.Node
};

export const SearchQueryItemInfo = (props: TProps) => {
  const { children } = props;
  return <div className={styles.SearchQueryItem__Info}>{children}</div>;
};
