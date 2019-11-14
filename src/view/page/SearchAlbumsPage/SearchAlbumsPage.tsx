import { SearchAlbumsPageScreen } from "type/state";

import React from "react";

import { useIntlDictionary } from "hook/useIntlDictionary";
import { useSearchAlbumsService } from "hook/useSearchAlbumsService";
import { setCustomInterval } from "util/setCustomInterval";
import { useSearchAlbumsPageState } from "hook/useSearchAlbumsPageState";
import { useDispatch } from "hook/useDispatch";
import { useSearchAlbumsPageQuery } from "hook/useSearchAlbumsPageQuery";

import { SearchAlbumsPageView } from "./SearchAlbumsPageView";

type TProps = {
  searchInterval: number;
};

export const SearchAlbumsPage = (props: TProps) => {
  const { searchInterval } = props;

  const {
    searchAlbumsPage: {
      subTitleText,
      fallbackSubTitleText,
      newResultsButtonText,
      fallbackButtonText
    }
  } = useIntlDictionary();

  const searchQuery = useSearchAlbumsPageQuery();

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

  const screen = React.useMemo<SearchAlbumsPageScreen>(() => {
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
