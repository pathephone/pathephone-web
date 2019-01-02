// @flow strict

import type { TFormAlbum } from "types/uiDataTypes";

import { asyncTimeout } from "utils/asyncTimeout";

export const submitAlbum = async (album: TFormAlbum): Promise<void> => {
  await asyncTimeout(500)
}