import { AlbumPreview } from "type/model";
import { useAlbumPreviewCollection } from "hook/useAlbumPreviewCollection";

export const useAlbumPreviews = (albumIds: string[]) => {
  const albumPreviews: AlbumPreview[] = [];

  const { byId } = useAlbumPreviewCollection();

  albumIds.forEach(albumId => {
    const album = byId.get(albumId);

    if (album) {
      albumPreviews.push(album);
    }
  });

  return albumPreviews;
};
