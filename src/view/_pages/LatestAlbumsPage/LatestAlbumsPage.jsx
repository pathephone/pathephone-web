// @flow strict

import React from "react";

import { LatestAlbumsPageProvider } from "providers/LatestAlbumsPageProvider";

import { LatestAlbumsPageContainer } from "./LatestAlbumsPageContainer";

export const LatestAlbumsPage = () => (
  <LatestAlbumsPageProvider>
    <LatestAlbumsPageContainer />
  </LatestAlbumsPageProvider>
);
