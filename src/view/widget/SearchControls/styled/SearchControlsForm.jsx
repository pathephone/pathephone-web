// @flow strict

import * as React from "react";

import styles from "./SearchControls.module.css";
import { testId } from "utils/testId";

type TProps = {|
  onSubmit(e: SyntheticEvent<HTMLFormElement>): void,
  children: React.Node
|};

export const SearchControlsForm = (props: TProps) => (
  <form
    {...props}
    className={styles.SearchControls__Form}
    data-testid={testId.SEARCH_BAR__FORM}
  />
);
