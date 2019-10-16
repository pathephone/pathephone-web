import * as React from "react";

import { useDispatch } from "hook/useDispatch";
import { usePlayerContext } from "hook/usePlayerContext";
import { TrackPreview } from "type/model";

import { PlaylistTrackView } from "./PlaylistTrackView";

type TProps = {
  track: TrackPreview;
};

export const PlaylistTrack = ({ track }: TProps) => {
  const { id, artistName, title } = track;

  const { playingTrackId } = usePlayerContext();

  const playing = playingTrackId === id;

  const dispatch = useDispatch();

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

  const screen = playing ? "PLAYING" : "DEFAULT";

  const memoizedTrack = React.useMemo(() => {
    return (
      <PlaylistTrackView
        screen={screen}
        artistName={artistName}
        title={title}
        onRemove={handleRemoveTrack}
        onPlay={handlePlayTrack}
      />
    );
  }, [screen, artistName, title, handleRemoveTrack, handlePlayTrack]);

  return memoizedTrack;
};
