import { TrackPreview } from "type/model";

import { getUIDString } from "util/uid";

const getAudioSrc = () => {
  return "https://upload.wikimedia.org/wikipedia/commons/9/99/Wolfgang_Amadeus_Mozart_-_Symphony_40_g-moll_-_1._Molto_allegro.ogg";
};

export const getTrackPreviewMock = (): TrackPreview => ({
  id: getUIDString(),
  artistName: "Artist name",
  title: "Track title",
  audioSrc: getAudioSrc()
});

export const getTrackPreviewMocks = (initialCount: number) => {
  let count = initialCount;
  const mocks: TrackPreview[] = [];
  while (count > 0) {
    mocks.push(getTrackPreviewMock());
    count -= 1;
  }
  return mocks;
};
