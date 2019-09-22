// @flow strict

import * as React from "react";

import { Page } from "view/Page/Page";

import styles from "./SearchAlbumsPage.module.css";

type TProps = {
  children: React.Node,
  errorMessage?: string
};

export const SearchAlbumsPageWrapper = ({ children }: TProps) => {
  return (
    <Page>
      <div className={styles.SearchAlbumsPage__Content}>{children}</div>
    </Page>
  );
};
