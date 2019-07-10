// @flow strict

import type { TPlaylistTrack } from "types/state";

import * as React from "react";

import { PlayerContext } from "contexts/PlayerContext";
import { useContextStrict } from "hooks/useContextStrict";

import { PlaylistTrackView } from "./PlaylistTrackView";

type TProps = {|
  track: TPlaylistTrack
|};

export const PlaylistTrack = ({ track }: TProps) => {
  const { id, artistName, title } = track;

  const {
    removePlaylistTrack,
    playingTrackId,
    setPlayingTrackId
  } = useContextStrict(PlayerContext);

  const playing = playingTrackId === id;

  // TODO: figure out how to better
  // track down cached audios
  const cached = false;

  const handleRemoveTrack = React.useCallback(() => {
    removePlaylistTrack(id);
  }, [id, removePlaylistTrack]);

  const handlePlayTrack = React.useCallback(() => {
    setPlayingTrackId(id);
  }, [id, setPlayingTrackId]);

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
