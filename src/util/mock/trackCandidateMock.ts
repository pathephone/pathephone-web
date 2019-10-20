import { TrackCandidate } from "type/model";
import { getUIDString } from "util/uid";
import { getArrayFactory } from "util/getArrayFactory";
import { getArtistCandidateMocks } from "util/mock/artistCandidateMock";
import { getAudioFileMock } from "util/mock/audioFileMock";

export const getTrackCandidateMock = (): TrackCandidate => ({
  id: getUIDString(),
  title: "Album title",
  artists: getArtistCandidateMocks(5),
  audio: getAudioFileMock()
});

export const getTrackCandidateMocks = getArrayFactory(getTrackCandidateMock);
