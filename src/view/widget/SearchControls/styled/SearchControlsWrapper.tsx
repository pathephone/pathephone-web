import * as React from "react";

import { useOutsideClick } from "hook/useOutsideClick";
import { FixedPanel } from "view/kit/FixedPanel/index";

import styles from "./SearchControls.module.css";

type TProps = {
  children: React.ReactNode;
  onOutsideClick(): void;
};

export const SearchControlsWrapper = ({ onOutsideClick, children }: TProps) => {
  const wrapperNodeRef = React.useRef<HTMLDivElement>(null);

  useOutsideClick(wrapperNodeRef, onOutsideClick);

  return (
    <FixedPanel position="top">
      <div ref={wrapperNodeRef} className={styles.SearchControls__Wrapper}>
        {children}
      </div>
    </FixedPanel>
  );
};
