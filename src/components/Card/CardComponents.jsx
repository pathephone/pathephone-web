// @flow strict

import * as React from "react";

import styles from "./Card.module.css";

type TProps = {|
  children: React.Node,
  withPadding?: boolean
|};

export const Card = ({ children, withPadding = false }: TProps) => (
  <div
    className={`${styles.Card__Wrapper} ${
      withPadding ? styles.Card__Wrapper_withPadding : ""
    }`}
  >
    {children}
  </div>
);
