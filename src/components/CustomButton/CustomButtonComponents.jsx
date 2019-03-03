// @flow strict

import * as React from "react";

import styles from "./CustomButton.module.css";

type TButtonProps = {|
  children: React.Node,
  hasToggledOnIndicator?: boolean,
  onClick(e: SyntheticEvent<HTMLButtonElement>): void
|};

export const CustomButton = ({
  hasToggledOnIndicator,
  ...nativeProps
}: TButtonProps) => (
  <button
    {...nativeProps}
    className={`${styles.CustomButton__Button} ${
      hasToggledOnIndicator === true
        ? styles.CustomButton__Button_toggledOn
        : ""
    }`}
  />
);
