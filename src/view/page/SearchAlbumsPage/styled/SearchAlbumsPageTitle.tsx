import * as React from "react";

import styles from "./SearchAlbumsPage.module.css";

type TProps = {
  text: string;
  testId: string;
};

export const SearchAlbumsPageTitle = ({ text, testId }: TProps) => {
  return (
    <h1 className={styles.SearchAlbumsPage__Title} data-testid={testId}>
      {text}
    </h1>
  );
};
