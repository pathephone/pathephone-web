import React from "react";

import { SearchAlbumsPageProvider } from "provider/SearchAlbumsPageProvider";
import { ALBUMS_SEARCH_INTERVAL } from "util/constant";

import { SearchAlbumsPageContainer } from "./SearchAlbumsPageContainer";

type Props = {
  searchInterval?: number;
};

export const SearchAlbumsPage = ({
  searchInterval = ALBUMS_SEARCH_INTERVAL
}: Props) => {
  return (
    <SearchAlbumsPageProvider>
      <SearchAlbumsPageContainer searchInterval={searchInterval} />
    </SearchAlbumsPageProvider>
  );
};
