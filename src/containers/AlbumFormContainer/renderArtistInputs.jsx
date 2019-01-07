// @flow strict

import type { TFormArtist } from "types/uiDataTypes";

import * as React from 'react';
import { getRawAlbumFormArtistData } from 'data/models';

export const renderArtistInputs = (
  onChange: (artists: TFormArtist[]) => void
) => (
  artist: TFormArtist, artistIndex: number, artists: TFormArtist[]
) => {

  const handleChange = (e) => {
    const { value, name } = e.currentTarget;
    const nextArtists = [
      ...artists
    ];
    nextArtists[artistIndex] = {
      ...artist,
      [name]: value
    };
    onChange(nextArtists)
  }

  return(
    <label key={artist.key}>
      Track artist #{artistIndex}<br />
      <input
        type='text'
        name="name"
        value={artist.name}
        placeholder="Track artist"
        onChange={handleChange}
      />
    </label>
  )
}
