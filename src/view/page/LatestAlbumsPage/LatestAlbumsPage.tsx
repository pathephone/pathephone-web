import React from "react";

import { LatestAlbumsPageProvider } from "provider/LatestAlbumsPageProvider";

import { LatestAlbumsPageContainer } from "./LatestAlbumsPageContainer";

export const LatestAlbumsPage = () => (
  <LatestAlbumsPageProvider>
    <LatestAlbumsPageContainer />
  </LatestAlbumsPageProvider>
);
