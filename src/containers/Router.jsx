// @flow strict

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AlbumsPage } from 'containers/AlbumsPage';
import { routes } from 'data/routes-module';
import { SharePageContainer } from 'containers/SharePage';

export const Router = () => (
  <Switch>
    <Route to={routes.albumsFeed} component={AlbumsPage} />
    <Route to={routes.shareAlbum} component={SharePageContainer} />
  </Switch>
)