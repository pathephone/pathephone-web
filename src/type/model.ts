export type AlbumPreview = {
  id: string;
  title: string;
  artistName: string;
  coverSrc: string;
  saved: boolean;
};

export type TrackPreview = {
  id: string;
  title: string;
  artistName: string;
  audioSrc: string;
};

export type ArtistCandidate = {
  id: string;
  name: string;
};

export type TrackCandidate = {
  id: string;
  title: string;
  artists: ArtistCandidate[];
  audio: File;
};

export type AlbumCandidate = {
  title: string;
  cover: File | null;
  tracklist: TrackCandidate[];
};

export type Feed<ItemType> = {
  items: ItemType[];
  lastPageFlag: boolean;
};
