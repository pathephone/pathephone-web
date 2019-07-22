// @flow strict

import * as React from "react";

import styles from "./SearchControls.module.css";
import { testId } from "utils/testId";

type TProps = {|
  onChange(e: SyntheticEvent<HTMLInputElement>): void,
  value: string
|};

export const SearchControlsInput = (props: TProps) => (
  <input
    {...props}
    type="text"
    autoFocus
    className={styles.SearchControls__Input}
    data-testid={testId.SEARCH_BAR__INPUT}
  />
);
