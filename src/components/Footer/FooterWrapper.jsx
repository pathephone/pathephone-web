// @flow strict

import * as React from 'react';

import styles from './Footer.module.css'

type TProps = {|
  children: React.Node;
|}

export const FooterWrapper = (props: TProps) => (
  <div className={styles.Footer__Wrapper} {...props} />
)