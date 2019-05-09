// @flow strict

import type { TFormAlbum, TFormTrack } from "types/stateTypes";

import * as React from "react";

import { getTrackFormDataFromFile } from "utils/getTrackFormDataFromFile";
import { AlbumAudioEditorLabel } from "./styled/AlbumAudioEditorLabel";
import { AlbumAudioEditorInput } from "./styled/AlbumAudioEditorInput";
import { AlbumAudioEditorText } from "./styled/AlbumAudioEditorText";

type TProps = {|
  data: TFormAlbum,
  onDataChange(data: TFormAlbum): void
|};

export const AlbumAudioEditorView = (props: TProps) => {
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
    <AlbumAudioEditorLabel>
      <AlbumAudioEditorInput onChange={handleAddTrack} />
      <AlbumAudioEditorText>Add tracks</AlbumAudioEditorText>
    </AlbumAudioEditorLabel>
  );
};
