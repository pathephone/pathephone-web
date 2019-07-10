// @flow strict

import type { TFeedAlbum, TPlayer, TSearchInfo } from "types/state";

import { getUIDString, getUID } from "utils/uid";

const coverURLs = [
  "https://preview.redd.it/6dft2z5w9cyz.jpg?width=960&crop=smart&auto=webp&s=9f934dc525835511feb7b7ef9d60f7319cea4423",
  "https://upload.wikimedia.org/wikipedia/en/0/05/Casualties_of_Cool.jpg",
  "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
];

const getRandomCoverURL = () => {
  return coverURLs[Math.floor(Math.random() * coverURLs.length)];
};

const getFeedAlbumMock = (): TFeedAlbum => ({
  id: getUIDString(),
  artistName: "Artist name",
  title: "Album title",
  coverSrc: getRandomCoverURL(),
  saved: true
});

export const getFeedAlbumMocks = (initialCount: number) => {
  let count = initialCount;
  const mocks: TFeedAlbum[] = [];
  while (count > 0) {
    mocks.push(getFeedAlbumMock());
    count -= 1;
  }
  return mocks;
};

export const getPlayerContextMock = (): TPlayer => ({
  playlist: [],
  playingTrackId: null,
  isPaused: false,
  isShuffle: false,
  isRepeat: false,
  toggleIsPaused() {},
  toggleIsShuffle() {},
  toggleIsRepeat() {},
  setPlayingTrackId() {},
  addPlaylistTracks() {},
  removePlaylistTrack() {},
  clearPlaylist() {}
});

export const getSearchInfoMock = (): TSearchInfo => ({
  text: `text${getUID()}`,
  saved: true,
  resultsCount: Math.floor(Math.random() * 10)
});

export const getSearchInfoMocks = (initialCount: number) => {
  let count = initialCount;
  const mocks: TSearchInfo[] = [];
  while (count > 0) {
    mocks.push(getSearchInfoMock());
    count -= 1;
  }
  return mocks;
};
