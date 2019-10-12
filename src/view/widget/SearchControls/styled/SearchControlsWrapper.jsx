// @flow strict

import * as React from "react";

import styles from "./SearchControls.module.css";

import { useOutsideClick } from "hook/useOutsideClick";
import { FixedPanel } from "view/kit/FixedPanel/index";

type TProps = {|
  children: React.Node,
  onOutsideClick(): void
|};

export const SearchControlsWrapper = ({ onOutsideClick, children }: TProps) => {
  const wrapperNodeRef = React.useRef();

  useOutsideClick(wrapperNodeRef, onOutsideClick);

  return (
    <FixedPanel position="top">
      <div ref={wrapperNodeRef} className={styles.SearchControls__Wrapper}>
        {children}
      </div>
    </FixedPanel>
  );
};
