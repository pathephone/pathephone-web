import { AlbumCandidate } from "type/model";
import { setAsyncTimeout } from "util/setAsyncTimeout";
import { SERVICE_MOCK_DELAY } from "util/constant";
import { getAlbumCandidateMock } from "util/mock/albumCandidateMock";

export const getAlbumCandidateFromFiles = async (
  originalFiles: File[]
): Promise<AlbumCandidate> => {
  await setAsyncTimeout(SERVICE_MOCK_DELAY);

  return getAlbumCandidateMock();
};
