import React from "react";

import { StrictHookError } from "util/error";
import { TrackPreview } from "type/model";
import { useTrackPreviewCollection } from "hook/useTrackPreviewCollection";
import { usePlayingTrackId } from "hook/usePlayingTrackId";

export const usePlayingTrack = (): null | TrackPreview => {
  const playingTrackId = usePlayingTrackId();

  const { byId } = useTrackPreviewCollection();

  return React.useMemo(() => {
    if (playingTrackId) {
      const tractPreview = byId.get(playingTrackId);

      return tractPreview || null;
    }

    return null;
  }, [byId, playingTrackId]);
};

export const usePlayingTrackStrict = (): TrackPreview => {
  const track = usePlayingTrack();

  if (!track) {
    throw new StrictHookError();
  }

  return track;
};
