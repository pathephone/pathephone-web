// @flow strict

import type { TFormArtist } from "types/stateTypes";

import * as React from "react";

import { getRawAlbumFormArtistData } from "data/models";

import { FloatingLabelInput } from "components/FloatingLabelInput/FloatingLabelInput";

type TProps = {|
  artist: TFormArtist,
  artistIndex: number,
  artists: TFormArtist[],
  onChange: (artists: TFormArtist[]) => void
|};

export const AlbumArtistInput = (props: TProps) => {
  const { artist, artistIndex, artists, onChange } = props;

  const handleChange = e => {
    const { value, name } = e.currentTarget;
    const nextArtists = [...artists];
    if (value.length > 0) {
      nextArtists[artistIndex] = {
        ...artist,
        [name]: value
      };
    } else {
      nextArtists.splice(artistIndex, 1);
    }
    if (artistIndex === artists.length - 1 && value.length > 0) {
      nextArtists.push(getRawAlbumFormArtistData());
    }
    onChange(nextArtists);
  };

  return (
    <FloatingLabelInput
      key={artist.key}
      name="name"
      value={artist.name}
      placeholder={`Track artist #${artistIndex + 1}`}
      onChange={handleChange}
    />
  );
};
