import { TMockStorageAlbum } from "service/mock/type";
import { AlbumPreview } from "type/model";

const toFeedAlbum = ({
  title,
  coverSrc,
  tracklist,
  id
}: TMockStorageAlbum): AlbumPreview => {
  const uniqueArtists = tracklist.reduce((acc: string[], track) => {
    const newArtists = track.artists.filter(artist => !acc.includes(artist));
    return [...acc, ...newArtists];
  }, []);

  let artistName;

  if (uniqueArtists.length > 1) {
    artistName = "Various artists";
  } else {
    artistName = uniqueArtists[0];
  }

  return {
    id,
    title,
    artistName,
    coverSrc,
    saved: true
  };
};

export const normalizeMockStorageAlbum = { toFeedAlbum };
