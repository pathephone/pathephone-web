import * as React from "react";

import { testId } from "util/testId";

import styles from "./SearchControls.module.css";

type TProps = {
  onSubmit(e: React.SyntheticEvent<HTMLFormElement>): void;
  children: React.ReactNode;
};

export const SearchControlsForm = (props: TProps) => (
  <form
    {...props}
    className={styles.SearchControls__Form}
    data-testid={testId.SEARCH_BAR__FORM}
  />
);
