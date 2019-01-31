// @flow strict

import type { TServicesAlbum } from "types/servicesTypes";

import { asyncTimeout } from "utils/asyncTimeout";

import { albumsStorage } from "./utils/albumsStorage";

export const getLatestAlbums = async (): Promise<TServicesAlbum[]> => {
  await asyncTimeout(500)
  return albumsStorage
}