// @flow strict

import * as React from 'react';

import styles from './TrackInputs.module.css';

type TProps = {|
  children: React.Node;
|}

export const TrackInputsWrapper = (props: TProps) => (
  <div {...props} className={styles.TrackInputs__Wrapper} />
)

export const TrackInputsCommon = (props: TProps) => (
  <div {...props} className={styles.TrackInputs__Common} />
)

export const TrackInputsArtists = (props: TProps) => (
  <div {...props} className={styles.TrackInputs__Artists} />
)