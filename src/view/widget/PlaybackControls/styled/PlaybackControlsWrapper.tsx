import * as React from "react";

import { FixedPanel } from "view/kit/FixedPanel/index";

import styles from "./PlaybackControls.module.css";

type TProps = {
  children: React.ReactNode;
  toRight?: boolean;
};

export const PlaybackControlsWrapper = ({ children, toRight }: TProps) => {
  return (
    <FixedPanel position="bottom">
      <div className={styles.PlaybackControls__Wrapper}>{children}</div>
    </FixedPanel>
  );
};
