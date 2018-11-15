// @flow strict

import * as React from 'react'

import styles from 'styles/App.module.css'

type TProps = {
  message: string;
}

export const AppErrorScreen = ({ message }: TProps) => (
  <div className={styles.AppErrorScreen}>
    {message} 
  </div>
)