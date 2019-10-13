import * as React from "react";

import styles from "./SearchAlbumsPage.module.css";

type TProps = {
  text: string;
  testId: string;
};

export const SearchAlbumsPageSubTitle = ({ text, testId }: TProps) => {
  return (
    <div className={styles.SearchAlbumsPage__SubTitle} data-testid={testId}>
      {text}
    </div>
  );
};
