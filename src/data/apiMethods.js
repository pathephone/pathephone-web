// @flow strict

import { startApp } from "api/startApp";
import { getAlbums } from "api/getAlbums";

export const apiMethods = {
  startApp,
  getAlbums
};

export type TApiMethods = typeof apiMethods;
