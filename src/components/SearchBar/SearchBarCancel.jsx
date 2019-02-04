// @flow strict

import * as React from "react";

import styles from "./SearchBar.module.css";

type TProps = {|
  children: React.Node,
  onClick(e: SyntheticEvent<HTMLButtonElement>): void,
  isDisabled?: boolean
|};

export const SearchBarCancel = (props: TProps) => (
  <button {...props} className={styles.SearchBar__Cancel} />
);
