// @flow strict

import type { TFeedAlbum } from 'types/state'
import type { TMetabinAlbumData, TMetabinAlbumRecord } from 'types/api'

export const feedAlbumMock: TFeedAlbum = {
  id: '1',
  title: 'Album Title',
  artistName: 'Album Artist',
  coverSrc: 'https://upload.wikimedia.org/wikipedia/en/0/05/Casualties_of_Cool.jpg',
}

export const metabinAlbumDataMock: TMetabinAlbumData = {
  title: 'Album Title',
  cover: {
    image: 'https://upload.wikimedia.org/wikipedia/en/0/05/Casualties_of_Cool.jpg'
  },
  tracklist: [
    {
      audio: 'https://en.wikipedia.org/wiki/File:Wolfgang_Amadeus_Mozart_-_Symphony_40_g-moll_-_1._Molto_allegro.ogg',
      title: "Track Title",
      artists: [
        'Mozart', 'MC Mozart'
      ]
    }
  ]
}

export const metabinAlbumRecordMock: TMetabinAlbumRecord = {
  cid: '',
  data: metabinAlbumDataMock
}