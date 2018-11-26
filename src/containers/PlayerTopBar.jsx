// @flow strict

import * as React from 'react'
import { Switch, Route } from 'react-router-dom';

import { Navigation } from 'containers/Navigation';
import { routes } from 'data/routes.module';
import { SearchBar } from 'containers/SearchBar';

const PlayerTopBar = () => {
  return(
    <PlayerTopBarWrapper>
      <PlayerTopBarLeft>
        <Navigation />
      </PlayerTopBarLeft>
      <PlayerTopBarRight>
        <Switch>
          <Route to={routes.albumsFeed} component={SearchBar} />
        </Switch>
      </PlayerTopBarRight>
    </PlayerTopBarWrapper>
  )
}