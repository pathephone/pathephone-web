// @flow strict

import React from 'react';

import { Navigation } from 'containers/Navigation';

import styles from 'styles/PlayerScreen.module.css'
import { Router } from 'containers/Router';
import { Playlist } from 'containers/Playlist';

export const PlayerScreen = () => (
  <div className={styles.PlayerScreen__Wrapper}>
    <div className={styles.PlayerScreen__LeftBar}>
      <Navigation />
    </div>
    <div className={styles.PlayerScreen__Content}>
      <Router />
    </div>
    <div className={styles.PlayerScreen__RightBar}>
      <Playlist />
    </div>
    <div className={styles.PlayerScreen__BottomBar}>
      <Playback />
    </div>
  </div>
);
