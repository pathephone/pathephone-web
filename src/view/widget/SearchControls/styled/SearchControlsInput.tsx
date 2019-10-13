import * as React from "react";

import { testId } from "util/testId";

import styles from "./SearchControls.module.css";

type TProps = {
  onChange(e: React.SyntheticEvent<HTMLInputElement>): void;
  value: string;
};

export const SearchControlsInput = (props: TProps) => (
  <input
    {...props}
    type="text"
    autoFocus
    className={styles.SearchControls__Input}
    data-testid={testId.SEARCH_BAR__INPUT}
  />
);
