// @flow strict

import React from 'react';

import styles from 'styles/PlayerScreen.module.css'

import { Navigation } from 'containers/Navigation';
import { Router } from 'containers/Router';
import { Playlist } from 'containers/Playlist';
import { PlaybackControls } from 'containers/PlaybackControls';
import { PlaylistService } from 'containers/PlaylistService';
import { PlayerScreenWrapper } from 'components/PlayerScreen/PlayerScreenWrapper';

export const PlayerScreen = () => (
  <PlaylistService>
    <PlayerTopBar />
    <Router />
    <PlayerBottomBar />
  </PlaylistService>
);
