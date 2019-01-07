// @flow strict

import type { TFormTrack, TFormArtist } from "types/uiDataTypes";

import * as React from 'react';

import { renderArtistInputs } from 'containers/AlbumFormContainer/renderArtistInputs';
import { getRawAlbumFormArtistData } from 'data/models';

export const renderTrackInputs = (
  onChange: (tracklist: TFormTrack[]) => void
) => (
  track: TFormTrack, trackIndex: number, tracklist: TFormTrack[]
) => {

  const handleTrackInputChange = (e) => {
    const { name, value } = e.currentTarget;
    const nextTracklist = [
      ...tracklist
    ]
    nextTracklist[trackIndex] = {
      ...track,
      [name]: value,
    }
    onChange(nextTracklist)
  }

  const handleArtistsChange = (artists: TFormArtist[]) => {
    const nextTracklist = [
      ...tracklist
    ]
    nextTracklist[trackIndex] = {
      ...track, artists
    }
    onChange(nextTracklist)
  }

  const handleAddArtist = () => {
    const nextTracklist = [
      ...tracklist
    ]
    const nextArtists = [
      ...track.artists
    ];
    nextArtists.push(getRawAlbumFormArtistData());
    nextTracklist[trackIndex] = {
      ...track, artists: nextArtists
    }
    onChange(nextTracklist)
  }

  return(
    <div key={track.key}>
      <label>
        Track title<br />
        <input 
          type="text"
          name="title"
          placeholder="Track title"
          value={track.title} 
          onChange={handleTrackInputChange}
        />
      </label>
      <br />
      {
        track.artists.map(renderArtistInputs(handleArtistsChange))
      }
      <button type="button" onClick={handleAddArtist}>
        add artist name
      </button>
      <hr />
    </div>
  )
}
