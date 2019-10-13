import * as React from "react";

import { FixedPanel } from "view/kit/FixedPanel/index";

import styles from "./PlaylistControls.module.css";

type TProps = {
  children: React.ReactNode;
};

export const PlaylistControlsWrapper = ({ children }: TProps) => {
  return (
    <FixedPanel position="bottom">
      <div className={styles.PlaylistControls__Wrapper}>{children}</div>;
    </FixedPanel>
  );
};
