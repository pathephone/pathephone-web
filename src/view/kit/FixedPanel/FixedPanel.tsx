import * as React from "react";

import { UnreachableError } from "util/error";

import styles from "./FixedPanel.module.css";

type TProps = {
  children: React.ReactNode;
  position: "top" | "bottom";
  testId?: string;
};

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
