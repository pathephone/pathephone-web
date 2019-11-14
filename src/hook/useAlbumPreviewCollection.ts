import { useCollections } from "hook/useCollections";

export const useAlbumPreviewCollection = () => {
  const { albumPreviewCollection } = useCollections();

  return albumPreviewCollection;
};
