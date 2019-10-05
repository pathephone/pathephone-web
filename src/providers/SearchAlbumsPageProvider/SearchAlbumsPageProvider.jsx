// @flow strict

import * as React from "react";

import { EventBoundary } from "view/EventBoundary";
import { SearchAlbumsPageContext } from "contexts/SearchAlbumsPageContext";

import { searchAlbumsPageReducer } from "./state/searchAlbumsPageReducer";
import { initialSearchAlbumsPageState } from "./state/initialSearchAlbumsPageState";

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
