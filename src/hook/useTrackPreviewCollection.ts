import { useCollections } from "hook/useCollections";

export const useTrackPreviewCollection = () => {
  const { trackPreviewCollection } = useCollections();

  return trackPreviewCollection;
};
