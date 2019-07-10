// @flow strict

import * as React from "react";

import styles from "./SearchQueryItem.module.css";

type TProps = {|
  text: string,
  hasAccent: boolean
|};

export const SearchQueryItemText = (props: TProps) => {
  const { text, hasAccent } = props;

  const className = `${styles.SearchQueryItem__Text} ${
    hasAccent ? styles.SearchQueryItem__Text_accent : ""
  }`;

  return <span className={className}>{text}</span>;
};
