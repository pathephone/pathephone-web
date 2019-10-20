import { AlbumCandidate } from "type/model";
import { getArrayFactory } from "util/getArrayFactory";
import { getTrackCandidateMocks } from "util/mock/trackCandidateMock";

export const getAlbumCandidateMock = (): AlbumCandidate => ({
  title: "Album title",
  cover: null,
  tracklist: getTrackCandidateMocks(5)
});

export const getAlbumCandidateMocks = getArrayFactory(getAlbumCandidateMock);
