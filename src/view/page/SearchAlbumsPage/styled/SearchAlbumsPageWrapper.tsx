import { TSearchAlbumsPageScreen } from "type/state";

import * as React from "react";

import { Page } from "view/kit/Page/Page";

import styles from "./SearchAlbumsPage.module.css";

type TProps = {
  children: React.ReactNode;
  screen: TSearchAlbumsPageScreen;
};

export const SearchAlbumsPageWrapper = ({ children, screen }: TProps) => {
  const className = (() => {
    const base = styles.SearchAlbumsPage__Wrapper;

    switch (screen) {
      case "LOADING":
        return styles.SearchAlbumsPage__Wrapper_loading;
      case "FALLBACK":
        return styles.SearchAlbumsPage__Wrapper_fallback;
      case "HAS_RESULTS":
        return styles.SearchAlbumsPage__Wrapper_hasResults;
      case "HAS_NEW_RESULTS":
        return styles.SearchAlbumsPage__Wrapper_hasNewResults;
      default:
        return base;
    }
  })();

  return (
    <Page>
      <div className={className}>{children}</div>
    </Page>
  );
};
