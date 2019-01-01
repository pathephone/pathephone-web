// @flow strict

import * as React from 'react';

import { OutsideClickDetector } from 'components/OutsideClickDetector';

import styles from './SearchBar.module.css'

type TProps = {|
  children: React.Node;
  onOutsideClick(): void;
|}

export const SearchBarWrapper = (props: TProps) => (
  <OutsideClickDetector {...props} className={styles.SearchBar__Wrapper} />
)