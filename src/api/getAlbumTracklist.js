// @flow strict

import type { TMetabinAlbumTrack } from "types/api"

import { metabinAlbumRecordMock } from "mocks/albums";

export const getAlbumTracklist = async (id: string): Promise<TMetabinAlbumTrack[]> => {
  return metabinAlbumRecordMock.data.tracklist
}