// @flow strict

import { LatestAlbumsPageContext } from "contexts/LatestAlbumsPageContext";
import { useContextStrict } from "hooks/useContextStrict";

export const useLatestAlbumsPageState = () => {
  return useContextStrict(LatestAlbumsPageContext);
};
