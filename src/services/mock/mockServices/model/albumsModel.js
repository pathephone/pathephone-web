// @flow strict

import type { TMockStorageAlbum } from "types/mockTypes";

const store: TMockStorageAlbum[] = [];

export const albumModel = {
  createAlbum(album: TMockStorageAlbum) {
    store.push(album);
  },
  getAlbumById(id: string) {
    const targetAlbum = store.find(album => album.id === id);
    if (!targetAlbum) {
      throw new Error("Unable to find album.");
    }
    return {
      ...targetAlbum,
      tracklist: [...targetAlbum.tracklist]
    };
  },
  getAllAlbums(startIndex: number, endIndex: number): TMockStorageAlbum[] {
    return store.slice(startIndex, endIndex);
  },
  getLastAlbumIndex() {
    return store.length - 1;
  }
};
