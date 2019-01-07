// @flow strict

import type { TFormArtist } from "types/uiDataTypes";

import * as React from 'react';

import { CustomTextInput } from 'components/CustomTextInput';

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
    <CustomTextInput
      key={artist.key}
      label={`Track artist #${artistIndex}`}
      name="name"
      value={artist.name}
      onChange={handleChange}
    />
  )
}
