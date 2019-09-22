// @flow strict

import * as React from "react";

import styles from "./SearchAlbumsPage.module.css";

import { testId } from "utils/testId";

type TProps = {|
  title: string,
  subTitle: string,
  mod: "fallback" | "default"
|};

export const SearchAlbumsPageHero = ({ title, subTitle, mod }: TProps) => {
  const className = React.useMemo(() => {
    const base = styles.SearchAlbumsPage__Hero;

    if (mod === "fallback") {
      return `${base} ${styles.SearchAlbumsPage__Hero_fallback}`;
    }

    if (mod === "default") {
      return `${base} ${styles.SearchAlbumsPage__Hero_default}`;
    }
  }, [mod]);

  return (
    <div className={className}>
      <h1
        className={styles.SearchAlbumsPage__Title}
        data-testid={testId.SEARCH_ALBUMS_PAGE__TITLE}
      >
        {title}
      </h1>
      <div
        className={styles.SearchAlbumsPage__SubTitle}
        data-testid={testId.SEARCH_ALBUMS_PAGE__SUB_TITLE}
      >
        {subTitle}
      </div>
    </div>
  );
};
