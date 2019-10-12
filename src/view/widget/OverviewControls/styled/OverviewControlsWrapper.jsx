// @flow strict

import * as React from "react";

import { testId } from "util/testId";

import { FixedPanel } from "view/kit/FixedPanel/index";

import styles from "./OverviewControls.module.css";

type TWrapperProps = {|
  children: React.Node
|};

export const OverviewControlsWrapper = ({ children }: TWrapperProps) => {
  return (
    <FixedPanel position="top" testId={testId.HEADER__PANEL}>
      <div className={styles.OverviewControls__Wrapper}>{children}</div>
    </FixedPanel>
  );
};
