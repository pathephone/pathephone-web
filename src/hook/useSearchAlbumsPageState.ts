import { useContextStrict } from "hook/useContextStrict";
import { SearchAlbumsPageContext } from "context/SearchAlbumsPageContext";

export const useSearchAlbumsPageState = () => {
  return useContextStrict(SearchAlbumsPageContext);
};
