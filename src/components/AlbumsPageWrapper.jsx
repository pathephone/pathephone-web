// @flow strict

import * as React from 'react'

import styles from 'components/AlbumsPage.module.css'

type TProps = {
  children: React.Node;
}

export const AlbumsPageWrapper = ({ children }: TProps) => (
  <div className={styles.AlbumsPage}>
    {children}
  </div>
)