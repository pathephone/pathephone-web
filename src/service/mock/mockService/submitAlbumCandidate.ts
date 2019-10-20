import { SERVICE_MOCK_DELAY } from "util/constant";
import { AlbumCandidate } from "type/model";
import { setAsyncTimeout } from "util/setAsyncTimeout";

export const submitAlbumCandidate = async (
  album: AlbumCandidate
): Promise<void> => {
  await setAsyncTimeout(SERVICE_MOCK_DELAY);
};
