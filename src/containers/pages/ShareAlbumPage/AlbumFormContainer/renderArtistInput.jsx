// @flow strict

import type { TFormArtist } from "types/uiDataTypes";

import * as React from 'react';

import { CustomTextInput } from 'components/CustomTextInput/CustomTextInputComponents';
import { getRawAlbumFormArtistData } from 'data/models';


export const renderArtistInput = (
  onChange: (artists: TFormArtist[]) => void
) => (
  artist: TFormArtist, artistIndex: number, artists: TFormArtist[]
) => {

  const handleChange = (e) => {
    const { value, name } = e.currentTarget;
    const nextArtists = [
      ...artists
    ];
    if (value.length > 0) {
      nextArtists[artistIndex] = {
        ...artist,
        [name]: value
      };
    } else {
      nextArtists.splice(artistIndex, 1)
    }
    if (artistIndex === artists.length - 1 && value.length > 0) {
      nextArtists.push(getRawAlbumFormArtistData())
    }
    onChange(nextArtists)
  }

  return(
    <React.Fragment key={artist.key}>
      <CustomTextInput
        label={`Track artist #${artistIndex + 1}`}
        name="name"
        value={artist.name}
        onChange={handleChange}
      />
      <br />
      <br />
    </React.Fragment>
  )
}
