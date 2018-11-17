// @flow strict

import type { TMetabinAlbumRecord } from "types/api"

import { metabinAlbumRecordMock } from "mocks/albums";

export const getAlbumsBySearch = async (searchString: string): Promise<TMetabinAlbumRecord[]> => {
  return [metabinAlbumRecordMock]
}