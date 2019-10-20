import { TrackCandidate } from "type/model";
import { setAsyncTimeout } from "util/setAsyncTimeout";
import { SERVICE_MOCK_DELAY } from "util/constant";
import { getTrackCandidateMock } from "util/mock/trackCandidateMock";

export const getTrackCandidateFromFile = async (
  file: File
): Promise<TrackCandidate> => {
  await setAsyncTimeout(SERVICE_MOCK_DELAY);

  return getTrackCandidateMock();
};
