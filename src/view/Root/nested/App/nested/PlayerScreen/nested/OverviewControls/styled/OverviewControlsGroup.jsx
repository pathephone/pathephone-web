// @flow strict

import * as React from "react";

import styles from "./OverviewControls.module.css";

type TWrapperProps = {|
  children: React.Node,
  mod: "nav" | "search"
|};

export const OverviewControlsGroup = ({ children, mod }: TWrapperProps) => {
  let className;

  if (mod === "nav") {
    className = styles.OverviewControls__Group_nav;
  }

  if (mod === "search") {
    className = styles.OverviewControls__Group_search;
  }

  return <div className={className}>{children}</div>;
};
