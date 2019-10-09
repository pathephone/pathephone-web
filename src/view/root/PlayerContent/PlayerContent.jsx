// @flow strict

import type { ContextRouter } from "react-router-dom";

import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { routes } from "data/routes";
import { LatestAlbumsPage } from "view/page/LatestAlbumsPage";
import { ShareAlbumPage } from "view/page/ShareAlbumPage";
import { SearchAlbumsPage } from "view/page/SearchAlbumsPage/SearchAlbumsPage";

const SearchAlbumsPageWithRouter = (props: ContextRouter) => {
  const {
    match: {
      params: { query }
    }
  } = props;

  if (typeof query !== "string") {
    throw new TypeError();
  }

  return <SearchAlbumsPage searchQuery={query} />;
};

export const PlayerContent = () => {
  return (
    <Switch>
      <Route
        exact
        path={routes.latestAlbumsPattern}
        component={LatestAlbumsPage}
      />
      <Route
        exact
        path={routes.searchAlbumsPattern}
        component={SearchAlbumsPageWithRouter}
      />
      <Route exact path={routes.shareAlbumPattern} component={ShareAlbumPage} />
      <Route
        exact
        path="/"
        render={() => <Redirect to={routes.latestAlbumsPattern} />}
      />
    </Switch>
  );
};
