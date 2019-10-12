// @flow

import * as React from "react";

import styles from "./PlayerNavigation.module.css";
import { useOutsideClick } from "hook/useOutsideClick";
import { testId } from "util/testId";

type TProps = {|
  children: React.Node,
  onOutsideClick(): void
|};

export const PlayerNavigationPopup = ({ children, onOutsideClick }: TProps) => {
  const navRef = React.useRef<null | HTMLElement>(null);

  useOutsideClick(navRef, onOutsideClick);

  return (
    <nav
      ref={navRef}
      data-testid={testId.PLAYER_NAVIGATION__POPUP}
      className={styles.PlayerNavigation__Popup}
    >
      {children}
    </nav>
  );
};
