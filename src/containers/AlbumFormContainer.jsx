// @flow strict

import type { TFormAlbum } from "types/uiDataTypes";

import * as React from 'react';

import { getRawAlbumFormTrackData } from 'data/models';
import { renderTrackInputs } from 'containers/AlbumFormContainer/renderTrackInputs';

type TProps = {|
  data: TFormAlbum;
  onDataChange(data: TFormAlbum): void;
|}

export const AlbumFormContainer = (props: TProps) => {

  const { data, onDataChange } = props;

  // Render form

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    onDataChange({
      ...data,
      [name]: value
    })
  }

  const handleAddTrack = () => {
    onDataChange({
      ...data,
      tracklist: [
        ...data.tracklist,
        getRawAlbumFormTrackData()
      ]
    })
  }

  const handleTracklistChange = (tracklist) => {
    onDataChange({
      ...data,
      tracklist
    })
  }

  return (
    <form>
      <fieldset>
        <legend>about</legend>
        <label>
          Album title<br />
          <input 
            type="text"
            name="title"
            placeholder="Album title"
            value={data.title} 
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Album cover<br />
          <input 
            type="file" 
            name="cover"
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>tracklist</legend>
        {
          data.tracklist.map(renderTrackInputs(handleTracklistChange))
        }
        <br />
        <button
          type="button"
          onClick={handleAddTrack}
        >
          add track
        </button>
      </fieldset>
    </form>
  )
}
