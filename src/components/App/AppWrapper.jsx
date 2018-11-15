// @flow strict

import * as React from 'react'

import styles from 'styles/App.module.css'

type TProps = {
  children: React.Node;
}

export const AppWrapper = ({ children }: TProps) => (
  <div className={styles.AppWrapper}>
    {children} 
  </div>
)