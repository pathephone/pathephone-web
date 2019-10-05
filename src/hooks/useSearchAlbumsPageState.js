// @flow strict

import { useContextStrict } from "hooks/useContextStrict";
import { SearchAlbumsPageContext } from "contexts/SearchAlbumsPageContext";

export const useSearchAlbumsPageState = () => {
  return useContextStrict(SearchAlbumsPageContext);
};
