// @flow strict

import React from 'react';

import styles from 'styles/PlayerScreen.module.css'

import { Navigation } from 'containers/Navigation';
import { Router } from 'containers/Router';
import { Playlist } from 'containers/Playlist';
import { PlaybackControls } from 'containers/PlaybackControls';

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
      <PlaybackControls />
    </div>
  </div>
);
