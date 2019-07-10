// @flow strict

import * as React from "react";

import styles from "./Header.module.css";
import { testId } from "utils/testId";

type TWrapperProps = {|
  children: React.Node,
  mod: "panel" | "content" | "nav-group" | "search-group"
|};

export const HeaderWrapper = ({ children, mod }: TWrapperProps) => {
  let className;
  let testIdMod;

  if (mod === "panel") {
    className = styles.Header__Wrapper_panel;
    testIdMod = testId.HEADER__PANEL;
  }

  if (mod === "content") {
    className = styles.Header__Wrapper_content;
  }

  if (mod === "nav-group") {
    className = styles.Header__Wrapper_navGroup;
  }

  if (mod === "search-group") {
    className = styles.Header__Wrapper_searchGroup;
  }

  return (
    <div className={className} data-testid={testIdMod}>
      {children}
    </div>
  );
};
