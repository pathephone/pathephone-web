// @flow strict

export const routes = {
  latestAlbumsPattern: "/latest",
  latestAlbumsRoute: () => "/latest",

  searchAlbumsPattern: "/search/:query",
  searchAlbumsRoute: (query: string) => `/search/${query}`,

  shareAlbumPattern: "/share",
  shareAlbumRoute: () => "/share"
};
