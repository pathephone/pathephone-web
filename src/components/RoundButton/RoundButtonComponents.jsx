// @flow strict

import * as React from "react";

import styles from "./RoundButton.module.css";

type TButtonProps = {|
  children: React.Node,
  disabled?: boolean,
  className?: string,
  testId?: string,
  onClick(e: SyntheticEvent<HTMLButtonElement>): void
|};

export const RoundButton = ({
  testId,
  className = "",
  ...nativeProps
}: TButtonProps) => (
  <button
    {...nativeProps}
    className={`${styles.RoundButton__Button} ${className}`}
    data-testid={testId}
  />
);
