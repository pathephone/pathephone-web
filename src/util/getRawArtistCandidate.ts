import { ArtistCandidate } from "type/model";
import { getUniqueString } from "util/getUniqueString";

export const getRawArtistCandidate = (): ArtistCandidate => ({
  id: getUniqueString(),
  name: ""
});
