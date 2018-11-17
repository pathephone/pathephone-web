// @flow strict

import type { TMetabinAlbumRecord } from "types/api"

import { metabinAlbumRecordMock } from "mocks/albums";

export const getLatestAlbums = async (): Promise<TMetabinAlbumRecord[]> => {
  return [metabinAlbumRecordMock]
}