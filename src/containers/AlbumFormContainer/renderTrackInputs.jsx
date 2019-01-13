// @flow strict

import type { TFormTrack, TFormArtist } from "types/uiDataTypes";

import * as React from 'react';

import { renderArtistInputs } from 'containers/AlbumFormContainer/renderArtistInputs';
import { TrackInputsWrapper } from 'components/TrackInputs/TrackInputsComponents';
import { TrackInputsCommon } from 'components/TrackInputs/TrackInputsComponents';
import { TrackInputsArtists } from 'components/TrackInputs/TrackInputsComponents';
import { CustomTextInput } from 'components/CustomTextInput/CustomTextInputComponents';

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

  return(
    <React.Fragment key={track.key}>
      <TrackInputsWrapper>
        <TrackInputsCommon>
          <CustomTextInput
            label="Track title"
            name="title"
            value={track.title}
            onChange={handleTrackInputChange}
          />
        </TrackInputsCommon>
        <TrackInputsArtists>
          {
            track.artists.map(renderArtistInputs(handleArtistsChange))
          }
        </TrackInputsArtists>
      </TrackInputsWrapper>
      <br />
      <hr />
      <br />
    </React.Fragment>
  )
}
