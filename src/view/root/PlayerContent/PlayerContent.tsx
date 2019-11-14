import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { routes } from "util/route";
import { LatestAlbumsPage } from "view/page/LatestAlbumsPage";
import { ShareAlbumPage } from "view/page/ShareAlbumPage";
import { SearchAlbumsPage } from "view/page/SearchAlbumsPage";
import { ALBUMS_SEARCH_INTERVAL } from "util/constant";

export const PlayerContent = () => {
  return (
    <Switch>
      <Route exact path={routes.latestAlbumsPattern}>
        <LatestAlbumsPage />
      </Route>
      <Route exact path={routes.searchAlbumsPattern}>
        <SearchAlbumsPage searchInterval={ALBUMS_SEARCH_INTERVAL} />
      </Route>
      <Route exact path={routes.shareAlbumPattern}>
        <ShareAlbumPage />
      </Route>
      <Route path="/">
        <Redirect to={routes.latestAlbumsPattern} />}
      </Route>
    </Switch>
  );
};
