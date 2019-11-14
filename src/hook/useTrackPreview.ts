import { useTrackPreviewCollection } from "hook/useTrackPreviewCollection";
import { StrictHookError } from "util/error";
import { TrackPreview } from "type/model";

export const useTrackPreview = (trackId: string): null | TrackPreview => {
  const { byId } = useTrackPreviewCollection();

  return byId.get(trackId) || null;
};

export const useTrackPreviewStrict = (trackId: string): TrackPreview => {
  const track = useTrackPreview(trackId);

  if (!track) {
    throw new StrictHookError();
  }

  return track;
};
