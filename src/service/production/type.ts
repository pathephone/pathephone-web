import { FileTypeResult } from "file-type";

export type CustomFile = {
  fileType: void | FileTypeResult;
  file: File;
};

export type TMockStorageTrack = {
  title: string;
  artists: string[];
  audioSrc: string;
};

export type TMockStorageAlbum = {
  id: string;
  title: string;
  coverSrc: string;
  tracklist: TMockStorageTrack[];
};
