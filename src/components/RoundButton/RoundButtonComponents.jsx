// @flow strict

import * as React from "react";

import styles from "./RoundButton.module.css";

type TButtonProps = {|
  children: React.Node,
  onClick(e: SyntheticEvent<HTMLButtonElement>): void
|};

export const RoundButton = ({ ...nativeProps }: TButtonProps) => (
  <button {...nativeProps} className={styles.RoundButton__Button} />
);
