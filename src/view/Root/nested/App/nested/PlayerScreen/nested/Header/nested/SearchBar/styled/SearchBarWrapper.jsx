// @flow strict

import * as React from "react";

import styles from "./SearchBar.module.css";

import { useOutsideClick } from "hooks/useOutsideClick";

type TProps = {|
  children: React.Node,
  onOutsideClick(): void
|};

export const SearchBarWrapper = ({ onOutsideClick, children }: TProps) => {
  const wrapperNodeRef = React.useRef();

  useOutsideClick(wrapperNodeRef, onOutsideClick);

  return (
    <div ref={wrapperNodeRef} className={styles.SearchBar__Wrapper}>
      {children}
    </div>
  );
};
