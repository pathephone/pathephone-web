// @flow strict

import React from "react";

import { SearchQueryItemWrapper } from "./styled/SearchQueryItemWrapper";
import { SearchQueryItemInfo } from "./styled/SearchQueryItemInfo";
import { SearchQueryItemLink } from "./styled/SearchQueryItemLink";
import { SearchQueryItemButton } from "./styled/SearchQueryItemButton";
import { SearchQueryItemText } from "./styled/SearchQueryItemText";

type TItemMemoizerProps = {
  url: string,
  linkText: string,
  countText: string,
  hasResultsAccent: boolean,
  onDeleteButtonClick(): void
};

export const SearchQueryItemView = (props: TItemMemoizerProps) => {
  const {
    url,
    linkText,
    countText,
    hasResultsAccent,
    onDeleteButtonClick
  } = props;

  return (
    <SearchQueryItemWrapper>
      <SearchQueryItemInfo>
        <SearchQueryItemLink text={linkText} url={url} />
        <SearchQueryItemText text={countText} hasAccent={hasResultsAccent} />
      </SearchQueryItemInfo>
      <SearchQueryItemButton onClick={onDeleteButtonClick} />
    </SearchQueryItemWrapper>
  );
};
