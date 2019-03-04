// @flow strict

import type { TFormAlbum, TFormTrack } from "types/stateTypes";

import * as React from "react";

import { getTrackFormDataFromFile } from "utils/getTrackFormDataFromFile";
import { AlbumTracksInputWrapper } from "components/AlbumTracksInput/AlbumTracksInputComponents";
import { AlbumTracksInputSquareButton } from "components/AlbumTracksInput/AlbumTracksInputComponents";
import { AlbumTracksInput } from "components/AlbumTracksInput/AlbumTracksInputComponents";

type TProps = {|
  data: TFormAlbum,
  onDataChange(data: TFormAlbum): void
|};

export const AlbumTracksInputContainer = (props: TProps) => {
  const { data, onDataChange } = props;

  const handleAddTrack = (e: SyntheticEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    Promise.all([...files].map(getTrackFormDataFromFile)).then(
      (tracks: TFormTrack[]) => {
        onDataChange({
          ...data,
          tracklist: [...data.tracklist, ...tracks]
        });
      }
    );
  };

  return (
    <AlbumTracksInputWrapper>
      <AlbumTracksInput onChange={handleAddTrack} />
      <AlbumTracksInputSquareButton text="Add tracks" />
    </AlbumTracksInputWrapper>
  );
};
