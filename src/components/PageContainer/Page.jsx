// @flow strict

import * as React from 'react'

import styles from 'components/PageContainer/Page.module.css'

type TProps = {
  children: React.Node;
}

export const Page = ({ children }: TProps) => (
  <div className={styles.Page}>
    {children}
  </div>
)