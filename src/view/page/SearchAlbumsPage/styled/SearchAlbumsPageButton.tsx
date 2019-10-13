import * as React from "react";

import styles from "./SearchAlbumsPage.module.css";

type TProps = {
  text: string;
  testId: string;
  onClick(): void;
};

export const SearchAlbumsPageButton = ({ text, testId, onClick }: TProps) => {
  return (
    <button
      className={styles.SearchAlbumsPage__Button}
      data-testid={testId}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
