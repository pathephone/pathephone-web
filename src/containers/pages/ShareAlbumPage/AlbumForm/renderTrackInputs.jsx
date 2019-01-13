// @flow strict

import type { TFormTrack, TFormArtist } from "types/uiDataTypes";

import * as React from 'react';

import { TrackInputsWrapper } from 'components/TrackInputs/TrackInputsComponents';
import { TrackInputsCommon } from 'components/TrackInputs/TrackInputsComponents';
import { TrackInputsArtists } from 'components/TrackInputs/TrackInputsComponents';
import { CustomTextInput } from 'components/CustomTextInput/CustomTextInputComponents';
import { TrackInputsControls } from 'components/TrackInputs/TrackInputsComponents';
import { TrackInputsButton } from 'components/TrackInputs/TrackInputsComponents';

import { renderArtistInput } from './renderArtistInput';
import { ClearIcon } from 'icons/round-clear';

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

  const handleRemove = () => {
    const nextTracklist = tracklist.filter(
      ({ key }) => key !== track.key
    )
    onChange(nextTracklist)
  }

  return(
    <TrackInputsWrapper key={track.key}>
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
          track.artists.map(renderArtistInput(handleArtistsChange))
        }
      </TrackInputsArtists>
      <TrackInputsControls>
        <TrackInputsButton onClick={handleRemove}>
          <ClearIcon />
        </TrackInputsButton>
      </TrackInputsControls>
    </TrackInputsWrapper>
  )
}
