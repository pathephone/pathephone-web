// @flow strict

import * as React from "react";
import { Link } from "react-router-dom";

import { testId } from "utils/testId";

import styles from "./SearchQueryItem.module.css";

type TProps = {|
  text: string,
  url: string
|};

export const SearchQueryItemLink = (props: TProps) => {
  const { text, url } = props;

  return (
    <Link
      to={url}
      data-testid={testId.SEARCH_QUERY_ITEM__LINK}
      className={styles.SearchQueryItem__Link}
    >
      {text}
    </Link>
  );
};
