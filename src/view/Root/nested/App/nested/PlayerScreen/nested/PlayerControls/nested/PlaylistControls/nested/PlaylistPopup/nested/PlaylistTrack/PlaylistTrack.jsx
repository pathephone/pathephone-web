// @flow strict

import type { TPlaylistTrack } from "types/state";

import * as React from "react";

import { useDispatch } from "hooks/useDispatch";
import { usePlayerContext } from "hooks/usePlayerContext";

import { PlaylistTrackView } from "./PlaylistTrackView";

type TProps = {|
  track: TPlaylistTrack
|};

export const PlaylistTrack = ({ track }: TProps) => {
  const { id, artistName, title } = track;

  const { playingTrackId } = usePlayerContext();

  const playing = playingTrackId === id;

  const dispatch = useDispatch();

  // TODO: figure out how to better
  // track down cached audios
  const cached = true;

  const handleRemoveTrack = React.useCallback(() => {
    dispatch({
      type: "PLAYLIST_TRACK__REMOVE",
      payload: id
    });
  }, [dispatch, id]);

  const handlePlayTrack = React.useCallback(() => {
    dispatch({
      type: "PLAYLIST_TRACK__PLAY",
      payload: id
    });
  }, [dispatch, id]);

  const hasPlayingScreen = playing;

  const hasCachingScreen = !cached;

  const memoizedTrack = React.useMemo(() => {
    return (
      <PlaylistTrackView
        artistName={artistName}
        title={title}
        hasPlayingScreen={hasPlayingScreen}
        hasCachingScreen={hasCachingScreen}
        onRemove={handleRemoveTrack}
        onPlay={handlePlayTrack}
      />
    );
  }, [
    artistName,
    title,
    hasPlayingScreen,
    hasCachingScreen,
    handleRemoveTrack,
    handlePlayTrack
  ]);

  return memoizedTrack;
};
