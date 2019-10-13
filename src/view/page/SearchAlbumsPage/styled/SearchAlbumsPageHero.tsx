import * as React from "react";

import styles from "./SearchAlbumsPage.module.css";

type TProps = {
  children: React.ReactNode;
};

export const SearchAlbumsPageHero = ({ children }: TProps) => {
  return <div className={styles.SearchAlbumsPage__Hero}>{children}</div>;
};
