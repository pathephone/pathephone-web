// @flow strict

import * as React from 'react';

import styles from './Page.module.css'

type TProps = {|
  children: React.Node;
|}

export const PageWrapper = (props: TProps) => (
  <main className={styles.Page__Wrapper}>
    {props.children}
  </main>
)