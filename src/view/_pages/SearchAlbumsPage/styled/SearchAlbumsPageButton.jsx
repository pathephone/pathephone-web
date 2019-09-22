// @flow strict

import * as React from "react";

import { testId } from "utils/testId";

import styles from "./SearchAlbumsPage.module.css";

type TProps = {|
  text: string,
  mod: "fallback" | "new-results",
  onClick(): void
|};

export const SearchAlbumsPageButton = ({ text, mod, onClick }: TProps) => {
  const className = React.useMemo(() => {
    const base = styles.SearchAlbumsPage__Button;

    if (mod === "fallback") {
      return `${base} ${styles.SearchAlbumsPage__Button_fallback}`;
    }

    if (mod === "new-results") {
      return `${base} ${styles.SearchAlbumsPage__Button_newResults}`;
    }
  }, [mod]);

  const dataTestId = React.useMemo(() => {
    if (mod === "fallback") {
      return testId.SEARCH_ALBUMS_PAGE__FALLBACK_BUTTON;
    }

    if (mod === "new-results") {
      return testId.SEARCH_ALBUMS_PAGE__NEW_RESULTS_BUTTON;
    }
  }, [mod]);

  return (
    <button className={className} data-testid={dataTestId} onClick={onClick}>
      {text}
    </button>
  );
};
