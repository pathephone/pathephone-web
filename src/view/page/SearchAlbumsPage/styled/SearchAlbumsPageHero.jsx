// @flow strict

import * as React from "react";

import styles from "./SearchAlbumsPage.module.css";

type TProps = {|
  children: React.Node
|};

export const SearchAlbumsPageHero = ({ children }: TProps) => {
  return <div className={styles.SearchAlbumsPage__Hero}>{children}</div>;
};
