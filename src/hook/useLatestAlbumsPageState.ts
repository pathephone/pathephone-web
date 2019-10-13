import { LatestAlbumsPageContext } from "context/LatestAlbumsPageContext";
import { useContextStrict } from "hook/useContextStrict";

export const useLatestAlbumsPageState = () => {
  return useContextStrict(LatestAlbumsPageContext);
};
