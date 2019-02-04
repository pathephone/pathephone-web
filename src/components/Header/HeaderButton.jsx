// @flow strict

import * as React from "react";

import styles from "./Header.module.css";

type TProps = {|
  children: React.Node,
  onClick(e: SyntheticEvent<HTMLButtonElement>): void
|};

export const HeaderButton = (props: TProps) => (
  <button {...props} className={styles.Header__Button} />
);
