// @flow strict

import * as React from "react";

import { ClearIcon } from "icons/round-clear";
import { testId } from "utils/testId";
import { RoundButton } from "view/RoundButton";

import styles from "./SearchQueryItem.module.css";

type TProps = {
  onClick(): void
};

export const SearchQueryItemButton = (props: TProps) => {
  const { onClick } = props;
  return (
    <RoundButton
      className={styles.SearchQueryItem__Button}
      onClick={onClick}
      testId={testId.SEARCH_QUERY_ITEM__BUTTON}
    >
      <ClearIcon />
    </RoundButton>
  );
};
