// @flow strict

import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { routes } from 'data/routes.module';
import { LatestAlbumsPageContainer } from 'containers/pages/LatestAlbumsPageContainer';
import { SearchAlbumsPageContainer } from 'containers/pages/SearchAlbumsPageContainer';

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
        path={routes.searchAlbumsPattern}
        component={SearchAlbumsPageContainer} 
      />
      <Route
        exact
        path="/" 
        render={() => (
          <Redirect to={routes.latestAlbumsPattern} />
        )}
      />
    </Switch>
  )
}
