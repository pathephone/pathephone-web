// @flow strict

import * as React from "react";

import styles from "./SquareButton.module.css";

type TButtonProps = {|
  children: React.Node,
  hasToggledOnIndicator?: boolean,
  onClick(e: SyntheticEvent<HTMLButtonElement>): void
|};

export const SquareButton = ({
  hasToggledOnIndicator,
  ...nativeProps
}: TButtonProps) => (
  <button
    {...nativeProps}
    className={`${styles.SquareButton__Button} ${
      hasToggledOnIndicator === true
        ? styles.SquareButton__Button_toggledOn
        : ""
    }`}
  />
);
