// @flow strict

import * as React from "react";

import styles from "./FixedPanel.module.css";

type TWrapperProps = {|
  children: React.Node,
  toBottom?: boolean
|};

export const FixedPanelWrapper = ({ children, toBottom }: TWrapperProps) => (
  <div
    className={`${styles.FixedPanel__Wrapper} ${
      toBottom === true
        ? styles.FixedPanel__Wrapper_bottom
        : styles.FixedPanel__Wrapper_top
    }`}
  >
    {children}
  </div>
);
