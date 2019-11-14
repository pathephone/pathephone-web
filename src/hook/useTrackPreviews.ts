import { TrackPreview } from "type/model";
import { useTrackPreviewCollection } from "hook/useTrackPreviewCollection";

export const useTrackPreviews = (trackIds: string[]) => {
  const trackPreviews: TrackPreview[] = [];

  const { byId } = useTrackPreviewCollection();

  trackIds.forEach(trackId => {
    const track = byId.get(trackId);

    if (track) {
      trackPreviews.push(track);
    }
  });

  return trackPreviews;
};
