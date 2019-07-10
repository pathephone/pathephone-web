// @flow strict

import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { routes } from "data/routes";
import { LatestAlbumsPageContainer } from "containers/pages/LatestAlbumsPageContainer";

import { ShareAlbumPage } from "./ShareAlbumPage";
import { SearchQueryPage } from "./SearchQueryPage";
import { SearchQueriesPage } from "./SearchQueriesPage";

export const PageContainer = () => {
  return (
    <Switch>
      <Route
        exact
        path={routes.latestAlbumsPattern}
        component={LatestAlbumsPageContainer}
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
