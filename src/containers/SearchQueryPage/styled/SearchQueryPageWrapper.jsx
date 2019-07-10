// @flow strict

import * as React from "react";

import { Page } from "components/Page/Page";

import styles from "./SearchQueryPage.module.css";

type TProps = {
  children: React.Node,
  errorMessage?: string
};

export const SearchQueryPageWrapper = ({ children }: TProps) => {
  return (
    <Page>
      <div className={styles.SearchQueryPage__Content}>{children}</div>
    </Page>
  );
};
