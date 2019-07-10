// @flow strict

import * as React from "react";

import styles from "./SearchQueryPage.module.css";

import { testId } from "utils/testId";

type TProps = {
  mod: "save" | "delete" | "new-results",
  text: string,
  onClick(): void
};

export const SearchQueryPageButton = ({ text, mod, onClick }: TProps) => {
  const modTestId = React.useMemo(() => {
    switch (mod) {
      case "save":
        return testId.SEARCH_QUERY_PAGE__SAVE_SEARCH_BUTTON;
      case "delete":
        return testId.SEARCH_QUERY_PAGE__DELETE_SEARCH_BUTTON;
      case "new-results":
        return testId.SEARCH_QUERY_PAGE__NEW_RESULTS_BUTTON;
      default:
        throw new TypeError();
    }
  }, [mod]);

  const modClassName = React.useMemo(() => {
    switch (mod) {
      case "save":
        return styles.SearchQueryPage__Button_save;
      case "delete":
        return styles.SearchQueryPage__Button_delete;
      case "new-results":
        return styles.SearchQueryPage__Button_newResults;
      default:
        throw new TypeError();
    }
  }, [mod]);

  const className = `${styles.SearchQueryPage__Button} ${modClassName}`;

  return (
    <button className={className} data-testid={modTestId} onClick={onClick}>
      {text}
    </button>
  );
};
