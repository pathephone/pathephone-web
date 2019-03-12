// @flow

import * as React from "react";
import { NavLink } from "react-router-dom";

import styles from "./PlayerNavigation.module.css";

type TNavigationProps = {|
  children: React.Node
|};

export const PlayerNavigationPopup = (props: TNavigationProps) => (
  <nav {...props} className={styles.PlayerNavigation__Popup} />
);

type TLinkProps = {|
  children: React.Node,
  to: string,
  onClick(e: SyntheticEvent<HTMLAnchorElement>): void
|};

export const PlayerNavigationLink = (props: TLinkProps) => (
  <NavLink
    {...props}
    className={styles.PlayerNavigation__Link}
    activeClassName={styles.PlayerNavigation__Link_current}
  />
);
