import * as React from "react";

import styles from "./AlbumsFeed.module.css";

type TProps = {
  children: React.ReactNode;
  testId?: string;
};

export const AlbumsFeedWrapper = ({ children, testId }: TProps) => (
  <div className={styles.AlbumsFeed__Wrapper} data-testid={testId}>
    {children}
  </div>
);
