// @flow strict

import * as React from "react";

import { UnreachableError } from "data/errors";

import styles from "./FixedPanel.module.css";

type TProps = {|
  children: React.Node,
  position: "top" | "bottom",
  testId?: string
|};

export const FixedPanel = ({ children, position, testId }: TProps) => {
  const className = (() => {
    let base = styles.FixedPanel__Wrapper;

    if (position === "top") {
      return `${base} ${styles.FixedPanel__Wrapper_top}`;
    }

    if (position === "bottom") {
      return `${base} ${styles.FixedPanel__Wrapper_bottom}`;
    }

    throw new UnreachableError();
  })();

  return (
    <div className={className} data-testid={testId}>
      {children}
    </div>
  );
};
