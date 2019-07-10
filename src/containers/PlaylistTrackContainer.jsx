// @flow strict

import type { TPlaylistTrack } from "types/state";

import * as React from "react";

import { PlayerContext } from "contexts/PlayerContext";
import { useContextStrict } from "hooks/useContextStrict";
import { PlaylistTrack } from "components/Playlist/PlaylistConponents";

type TProps = {|
  track: TPlaylistTrack
|};

export const PlaylistTrackContainer = ({ track }: TProps) => {
  const { id, artistName, title } = track;

  const {
    removePlaylistTrack,
    playingTrackId,
    setPlayingTrackId
  } = useContextStrict(PlayerContext);

  const playing = playingTrackId === id;

  // TODO: figure out how to better
  // track down cached audios
  const cached = true;

  const memoizedTrack = React.useMemo(() => {
    const handleRemoveTrack = () => {
      removePlaylistTrack(id);
    };
    const handlePlayTrack = () => {
      setPlayingTrackId(id);
    };

    return (
      <PlaylistTrack
        artistName={artistName}
        title={title}
        hasPlayingIndicator={playing}
        isPlayButtonDisabled={!cached}
        hasCachingIndicator={!cached}
        onRemove={handleRemoveTrack}
        onPlay={handlePlayTrack}
      />
    );
  }, [
    id,
    cached,
    artistName,
    title,
    playing,
    removePlaylistTrack,
    setPlayingTrackId
  ]);

  return memoizedTrack;
};
