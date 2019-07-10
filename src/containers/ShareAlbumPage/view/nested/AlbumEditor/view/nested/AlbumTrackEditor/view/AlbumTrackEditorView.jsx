// @flow strict

import type { TFormTrack, TFormArtist } from "types/state";

import * as React from "react";

import { FloatingLabelInput } from "components/FloatingLabelInput/FloatingLabelInput";
import { ArrowUpIcon } from "icons/round-keyboard_arrow_up";
import { ArrowDownIcon } from "icons/round-keyboard_arrow_down";
import { DeleteIcon } from "icons/round-delete";

import { AlbumArtistInput } from "./nested/AlbumArtistInput";
import { AlbumTrackEditorWrapper } from "./styled/AlbumTrackEditorWrapper";
import { AlbumTrackEditorCommon } from "./styled/AlbumTrackEditorCommon";
import { AlbumTrackEditorTitle } from "./styled/AlbumTrackEditorTitle";
import { AlbumTrackEditorButton } from "./styled/AlbumTrackEditorButton";
import { AlbumTrackEditorControls } from "./styled/AlbumTrackEditorControls";

type TProps = {
  track: TFormTrack,
  trackIndex: number,
  tracklist: TFormTrack[],
  onChange: (tracklist: TFormTrack[]) => void
};

export const AlbumTrackEditorView = (props: TProps) => {
  const { track, trackIndex, tracklist, onChange } = props;

  const handleTrackInputChange = e => {
    const { name, value } = e.currentTarget;
    const nextTracklist = [...tracklist];
    nextTracklist[trackIndex] = {
      ...track,
      [name]: value
    };
    onChange(nextTracklist);
  };

  const handleArtistsChange = React.useCallback(
    (artists: TFormArtist[]) => {
      const nextTracklist = [...tracklist];
      nextTracklist[trackIndex] = {
        ...track,
        artists
      };
      onChange(nextTracklist);
    },
    [onChange, tracklist, track, trackIndex]
  );

  const handleRemove = () => {
    const nextTracklist = tracklist.filter(({ key }) => key !== track.key);
    onChange(nextTracklist);
  };

  const handleMoveUp = () => {
    const nextTracklist = [...tracklist];
    const swapTargetIndex = trackIndex - 1;
    // $FlowFixMe
    [nextTracklist[trackIndex], nextTracklist[swapTargetIndex]] = [
      nextTracklist[swapTargetIndex],
      nextTracklist[trackIndex]
    ];
    onChange(nextTracklist);
  };

  const handleMoveDown = () => {
    const nextTracklist = [...tracklist];
    const swapTargetIndex = trackIndex + 1;
    // $FlowFixMe
    [nextTracklist[trackIndex], nextTracklist[swapTargetIndex]] = [
      nextTracklist[swapTargetIndex],
      nextTracklist[trackIndex]
    ];
    onChange(nextTracklist);
  };

  const artistInputsNode = React.useMemo(
    () =>
      track.artists.map((artist, artistIndex, artists) => (
        <AlbumArtistInput
          onChange={handleArtistsChange}
          artist={artist}
          artistIndex={artistIndex}
          artists={artists}
        />
      )),
    [track.artists, handleArtistsChange]
  );

  return (
    <AlbumTrackEditorWrapper>
      <AlbumTrackEditorCommon>
        <AlbumTrackEditorTitle text={track.audio.name} />
        <FloatingLabelInput
          name="title"
          value={track.title}
          placeholder="Track title"
          onChange={handleTrackInputChange}
        />
        {artistInputsNode}
      </AlbumTrackEditorCommon>
      <AlbumTrackEditorControls>
        <AlbumTrackEditorButton
          isDisabled={trackIndex === 0}
          onClick={handleMoveUp}
        >
          <ArrowUpIcon />
        </AlbumTrackEditorButton>
        <AlbumTrackEditorButton
          isDisabled={trackIndex === tracklist.length - 1}
          onClick={handleMoveDown}
        >
          <ArrowDownIcon />
        </AlbumTrackEditorButton>
        <AlbumTrackEditorButton onClick={handleRemove}>
          <DeleteIcon />
        </AlbumTrackEditorButton>
      </AlbumTrackEditorControls>
    </AlbumTrackEditorWrapper>
  );
};
