// @flow

import * as React from "react";
import { NavLink } from "react-router-dom";

import styles from "./PlayerNavigation.module.css";

type TProps = {|
  text: string,
  to: string,
  testId: string,
  onClick(e: SyntheticEvent<HTMLAnchorElement>): void
|};

export const PlayerNavigationLink = ({ text, to, testId, onClick }: TProps) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={styles.PlayerNavigation__Link}
    activeClassName={styles.PlayerNavigation__Link_current}
    data-testid={testId}
  >
    {text}
  </NavLink>
);
