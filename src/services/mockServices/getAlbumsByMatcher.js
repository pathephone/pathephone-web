// @flow strict

import type { TServicesAlbum } from "types/servicesTypes";

import { asyncTimeout } from "utils/asyncTimeout";

export const getAlbumsByMatcher = async (matcher: string): Promise<TServicesAlbum[]> => {
  await asyncTimeout(500)
  return []
}