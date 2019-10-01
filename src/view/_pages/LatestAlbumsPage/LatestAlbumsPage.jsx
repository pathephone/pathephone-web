// @flow strict

import React from "react";

import { LatestAlbumsPageProvider } from "providers/LatestAlbumsPageProvider";

import { LatestAlbumsPageView } from "./LatestAlbumsPageView";

export const LatestAlbumsPage = () => (
  <LatestAlbumsPageProvider>
    <LatestAlbumsPageView />
  </LatestAlbumsPageProvider>
);
