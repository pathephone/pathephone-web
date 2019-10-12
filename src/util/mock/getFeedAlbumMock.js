// @flow strict

import type { TFeedAlbum } from "type/state";

import { getUIDString } from "util/uid";

const coverURLs = [
  "https://preview.redd.it/6dft2z5w9cyz.jpg?width=960&crop=smart&auto=webp&s=9f934dc525835511feb7b7ef9d60f7319cea4423",
  "https://upload.wikimedia.org/wikipedia/en/0/05/Casualties_of_Cool.jpg",
  "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
];

const getRandomCoverURL = () => {
  return coverURLs[Math.floor(Math.random() * coverURLs.length)];
};

export const getFeedAlbumMock = (): TFeedAlbum => ({
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
