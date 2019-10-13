import * as React from "react";

import styles from "./SearchAlbumsPage.module.css";

type TProps = {
  children: React.ReactNode;
};

export const SearchAlbumsPageBody = ({ children }: TProps) => {
  return <div className={styles.SearchAlbumsPage__Body}>{children}</div>;
};
