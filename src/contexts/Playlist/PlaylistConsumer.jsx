// @flow strict

import type { TPlaylistContext } from 'contexts/Playlist/PlaylistContext';

import * as React from 'react';

import { PlaylistContext } from "contexts/Playlist/PlaylistContext";

type TConsumerProps = {|
  children(TPlaylistContext): React.Node;
|}

type THelperProps = {|
  children: React.Node;  
|}

export class PlaylistConsumer extends React.Component<TConsumerProps, TPlaylistContext> {
  render() {
    const { children } = this.props
    return (
      <PlaylistContext.Consumer value={this.state}>
        {context => {
          if (context) {
            return children(context);
          }
          throw new Error('Consumer has been used outside of the Provider.');
        }}
      </PlaylistContext.Consumer>
    )
  }

  static IsEmpty = ({ children }: THelperProps) => (
    <PlaylistConsumer>{
      ({ tracks }) => {
        if (tracks.length === 0) {
          return children
        }
        return null
      } 
    }</PlaylistConsumer>
  )

  static IsNotEmpty = ({ children }: THelperProps) => (
    <PlaylistConsumer>{
      ({ tracks }) => {
        if (tracks.length > 0) {
          return children
        }
        return null
      } 
    }</PlaylistConsumer>
  )

}