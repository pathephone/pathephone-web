// @flow strict

import * as React from "react";

import { EventBoundary } from "util/react/EventBoundary";
import { SearchAlbumsPageContext } from "context/SearchAlbumsPageContext";

import {
  searchAlbumsPageReducer,
  initialSearchAlbumsPageState
} from "reducer/searchAlbumsPageReducer";

type TProps = {|
  children: React.Node
|};

export const SearchAlbumsPageProvider = ({ children }: TProps) => {
  const [state, dispatch] = React.useReducer(
    searchAlbumsPageReducer,
    initialSearchAlbumsPageState
  );

  return (
    <EventBoundary handler={dispatch}>
      <SearchAlbumsPageContext.Provider value={state}>
        {children}
      </SearchAlbumsPageContext.Provider>
    </EventBoundary>
  );
};
