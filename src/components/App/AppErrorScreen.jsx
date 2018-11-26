// @flow strict

import * as React from 'react';

import styles from './App.module.css'

type TProps = {|
  children: string;
|}

export const AppErrorScreen = ({ children }: TProps) => (
  <div className={styles.App__ErrorScreen}>
    <p className={styles.App__ErrorMessage}>
      {children}
    </p>
  </div>
)