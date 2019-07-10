// @flow strict

import type { TSearchInfo } from "types/state";

import React from "react";

import { routes } from "data/routes";

import { SearchQueryItemView } from "./SearchQueryItemView";

type TProps = {
  item: TSearchInfo,
  onDelete(queryText: string): void
};

export const SearchQueryItem = (props: TProps) => {
  const {
    item: { text, resultsCount },
    onDelete
  } = props;

  // State normalization
  const onDeleteButtonClick = React.useCallback(() => {
    onDelete(text);
  }, [onDelete, text]);

  const linkText = text;

  const resultsCountTextPostfix = "albums found";

  const resultsCountFallbackText = "no albums found";

  const countText = (() => {
    if (resultsCount === 0) {
      return resultsCountFallbackText;
    }
    return `${resultsCount} ${resultsCountTextPostfix}`;
  })();

  const hasResultsAccent = resultsCount > 0;

  const url = routes.searchQueryRoute(text);

  const viewProps = React.useMemo(
    () => ({
      hasResultsAccent,
      countText,
      linkText,
      url,
      onDeleteButtonClick
    }),
    [hasResultsAccent, countText, linkText, url, onDeleteButtonClick]
  );

  return React.useMemo(() => {
    return <SearchQueryItemView {...viewProps} />;
  }, [viewProps]);
};
