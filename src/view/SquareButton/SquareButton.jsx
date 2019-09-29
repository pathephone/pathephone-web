// @flow strict

import * as React from "react";

import styles from "./SquareButton.module.css";

type TProps = {|
  children: React.Node,
  disabled?: boolean,
  hasToggledOnIndicator?: boolean,
  testId?: string,
  onClick(e: SyntheticEvent<HTMLButtonElement>): void
|};

export const SquareButton = ({
  hasToggledOnIndicator,
  testId,
  ...nativeProps
}: TProps) => (
  <button
    {...nativeProps}
    className={`${styles.SquareButton__Button} ${
      hasToggledOnIndicator === true
        ? styles.SquareButton__Button_toggledOn
        : ""
    }`}
    data-testid={testId}
  />
);
