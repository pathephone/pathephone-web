// @flow strict

import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { routes } from "data/routes";
import { LatestAlbumsPage } from "view/_pages/LatestAlbumsPage";
import { SearchQueriesPage } from "view/_pages/SearchQueriesPage";
import { SearchQueryPage } from "view/_pages/SearchQueryPage";
import { ShareAlbumPage } from "view/_pages/ShareAlbumPage";

export const Content = () => {
  return (
    <Switch>
      <Route
        exact
        path={routes.latestAlbumsPattern}
        component={LatestAlbumsPage}
      />
      <Route
        exact
        path={routes.searchQueriesPattern}
        component={SearchQueriesPage}
      />
      <Route
        exact
        path={routes.searchQueryPattern}
        component={SearchQueryPage}
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
