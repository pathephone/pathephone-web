import { getArrayFactory } from "util/getArrayFactory";
import { getUIDString } from "util/uid";
import { ArtistCandidate } from "type/model";

export const getArtistCandidateMock = () => {
  const artistMock: ArtistCandidate = {
    id: getUIDString(),
    name: "artist name"
  };

  return artistMock;
};

export const getArtistCandidateMocks = getArrayFactory(getArtistCandidateMock);
