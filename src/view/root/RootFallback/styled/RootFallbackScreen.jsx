// @flow strict

import * as React from "react";

import styles from "./App.module.css";

type TProps = Error;

export const RootFallbackScreen = ({ message }: TProps) => (
  <div className={styles.RootFallback__Wrapper}>
    <p className={styles.RootFallback__Text}>{message}</p>
  </div>
);
