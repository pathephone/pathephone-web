import * as React from "react";

import styles from "./DropZone.module.css";

type TProps = {
  children: React.ReactNode;
};

export const DropZoneWrapper = ({ children }: TProps) => {
  return <div className={styles.DropZone__Wrapper}>{children}</div>;
};
