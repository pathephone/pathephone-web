// @flow strict

export type TPlaylistTrack = {
  id: string;
  title: string;
  artistName: string;
  audioSrc: string;
}

export type TFeedAlbum = {
  id: string;
  title: string;
  artistName: string;
  coverSrc: string;
}

export type TGlobalContext = {

  playlist: TPlaylistTrack[];
  setPlaylistTracks(tracks: TPlaylistTrack[]): void;

  currentTrackId: number | null;
  setCurrentTrackId(id: number | null): void;

}
