// @flow strict

import * as React from "react";

import styles from "./SquareButton.module.css";

type TButtonProps = {|
  children: React.Node,
  hasToggledOnIndicator?: boolean,
  testId?: string,
  onClick(e: SyntheticEvent<HTMLButtonElement>): void
|};

export const SquareButton = ({
  hasToggledOnIndicator,
  testId,
  ...nativeProps
}: TButtonProps) => (
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
