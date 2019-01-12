// @flow strict

import * as React from 'react';

import styles from './App.module.css'

type TProps = Error

export const AppErrorScreen = ({ message }: TProps) => (
  <div className={styles.App__ErrorScreen}>
    <p className={styles.App__ErrorMessage}>
      {message}
    </p>
  </div>
)