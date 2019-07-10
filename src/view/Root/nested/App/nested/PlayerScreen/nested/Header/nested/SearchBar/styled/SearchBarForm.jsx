// @flow strict

import * as React from "react";

import styles from "./SearchBar.module.css";
import { testId } from "utils/testId";

type TProps = {|
  onSubmit(e: SyntheticEvent<HTMLFormElement>): void,
  children: React.Node
|};

export const SearchBarForm = (props: TProps) => (
  <form
    {...props}
    className={styles.SearchBar__Form}
    data-testid={testId.SEARCH_BAR__FORM}
  />
);
