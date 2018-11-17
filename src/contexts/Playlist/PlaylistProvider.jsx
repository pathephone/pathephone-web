// @flow strict

import type { TPlaylistContext } from 'contexts/Playlist/PlaylistContext';

import * as React from 'react';

import { PlaylistContext } from "contexts/Playlist/PlaylistContext";

type TProps = {|
  children: React.Node;
|}

export class PlaylistProvider extends React.Component<TProps, TPlaylistContext> {
  state = {
    tracks: [],
    replaceTracks(tracks) {
      this.setState({ tracks })
    },
    addTracks(tracks) {
      this.setState({ tracks })
    },
    clearTracks() {
      this.setState({ tracks: [] })
    }
  }

  render() {
    const { children } = this.props
    return (
      <PlaylistContext.Provider value={this.state}>
        {children}
      </PlaylistContext.Provider>
    )
  }
}