// @flow strict

import * as React from "react";

import styles from "./Fieldset.module.css";

type TProps = {|
  children: React.Node
|};

export const Fieldset = ({ children }: TProps) => (
  <fieldset className={styles.Fieldset__Wrapper}>
    <div className={styles.Fieldset__Slot}>{children}</div>
  </fieldset>
);
