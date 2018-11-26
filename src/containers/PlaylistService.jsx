// @flow strict

import type { TPlaylistTrack } from 'types/state'
import type { TPlaylistAction } from 'types/actions'

import * as React from 'react';

import { useState } from 'hooks/useState';
import { useReducer } from 'hooks/useReducer';
import { PlaylistContext } from 'contexts/playlistContext';

type TProps = {
  children: React.Node;
}

export const PlaylistService = ({ children }: TProps) => {

  const [ tracks, setTracks ] = useState<TPlaylistTrack[]>([])

  const replaceTracks = (nextTracks) => {
    setTracks(nextTracks)
  }

  const queueTracks = (newTracks) => {
    setTracks([...tracks, ...newTracks])
  }

  const removeTrackById = (id) => {
    const handleMap = track => {
      if (track.id === id) {
        return {
          ...track,
          isRemoved: true
        }
      }
      return track
    }
    setTracks(
      tracks.map(handleMap)
    )
  }

  const playTrackById = (id) => {
    const handleMap = track => {
      if (track.id === id) {
        return {
          ...track,
          isPlaying: true
        }
      }
      if (track.isPlaying) {
        return {
          ...track,
          isPlaying: false
        }
      }
      return track
    }
    setTracks(
      tracks.map(handleMap)
    )
  }

  const value = {
    tracks, replaceTracks, queueTracks, removeTrackById, playTrackById
  }

  return (
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  )
}