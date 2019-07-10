// @flow strict

import * as React from "react";

import styles from "./SearchQueryItem.module.css";

type TProps = {
  text: string
};

export const SearchQueryItemText = (props: TProps) => {
  const { text } = props;

  return <span className={styles.SearchQueryItem__Text}>{text}</span>;
};
