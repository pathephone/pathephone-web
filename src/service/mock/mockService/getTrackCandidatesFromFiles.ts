import { getTrackCandidateFromFile } from "./getTrackCandidateFromFile";
import { TrackCandidate } from "type/model";

export const getTrackCandidatesFromFiles = (
  files: File[]
): Promise<TrackCandidate[]> => {
  return Promise.all(files.map(getTrackCandidateFromFile));
};
