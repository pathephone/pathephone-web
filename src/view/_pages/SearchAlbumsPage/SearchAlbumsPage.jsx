// @flow strict

import type { TSearchAlbumsPageScreen } from "types/state";

import React from "react";

import { useIntlDictionary } from "hooks/useIntl";
import { ALBUMS_SEARCH_INTERVAL } from "data/constants";
import { SearchAlbumsPageProvider } from "providers/SearchAlbumsPageProvider/index";
import { useSearchAlbumsService } from "hooks/useSearchAlbumsService";
import { setCustomInterval } from "utils/setCustomInterval";
import { useSearchAlbumsPageState } from "hooks/useSearchAlbumsPageState";
import { useDispatch } from "hooks/useDispatch";

import { SearchAlbumsPageView } from "./SearchAlbumsPageView";

type TProps = {|
  searchQuery: string,
  searchInterval?: number
|};

const SearchAlbumsPageContainer = (props: TProps) => {
  const { searchQuery, searchInterval = ALBUMS_SEARCH_INTERVAL } = props;

  const {
    searchAlbumsPage: {
      subTitleText,
      fallbackSubTitleText,
      newResultsButtonText,
      fallbackButtonText
    }
  } = useIntlDictionary();

  const dispatch = useDispatch();

  const searchAlbums = useSearchAlbumsService();

  const { failed, albums, newAlbums } = useSearchAlbumsPageState();

  React.useEffect(() => {
    dispatch({
      type: "SEARCH_ALBUMS_PAGE__NEW_QUERY",
      payload: searchQuery
    });
  }, [dispatch, searchQuery]);

  // Create interval that will perform initial service call,
  // will trigger service periodically and cancel it if service fails.
  React.useEffect(() => {
    if (!failed) {
      searchAlbums(searchQuery);

      return setCustomInterval(() => searchAlbums(searchQuery), searchInterval);
    }
  }, [failed, searchAlbums, searchInterval, searchQuery]);

  const onNewResultsButtonClick = React.useCallback(() => {
    dispatch({
      type: "SEARCH_ALBUMS_PAGE__SHOW_NEW_RESULTS"
    });
  }, [dispatch]);

  const onFallbackButtonClick = React.useCallback(() => {
    dispatch({
      type: "SEARCH_ALBUMS_PAGE__RETRY"
    });
  }, [dispatch]);

  // State normalization

  const titleText = searchQuery;

  const feedItems = albums;

  const screen = React.useMemo<TSearchAlbumsPageScreen>(() => {
    if (!failed && albums.length > 0) {
      if (newAlbums.length > 0) {
        return "HAS_NEW_RESULTS";
      } else {
        return "HAS_RESULTS";
      }
    }

    if (!failed && albums.length === 0) {
      return "LOADING";
    }

    if (failed && albums.length === 0) {
      return "FALLBACK";
    }

    throw new TypeError();
  }, [albums.length, failed, newAlbums.length]);

  const viewProps = {
    screen,
    titleText,
    subTitleText,
    fallbackSubTitleText,
    newResultsButtonText,
    fallbackButtonText,
    feedItems,
    onNewResultsButtonClick,
    onFallbackButtonClick
  };

  return <SearchAlbumsPageView {...viewProps} />;
};

export const SearchAlbumsPage = (props: TProps) => (
  <SearchAlbumsPageProvider>
    <SearchAlbumsPageContainer {...props} />
  </SearchAlbumsPageProvider>
);
