// @flow strict

export const routes = {
  latestAlbumsPattern: "/latest",
  latestAlbumsRoute: () => "/latest",

  searchQueriesPattern: "/search",
  searchQueriesRoute: () => "/search",

  searchQueryPattern: "/search/:query",
  searchQueryRoute: (query: string) => `/search/${query}`,

  shareAlbumPattern: "/share",
  shareAlbumRoute: () => "/share"
};
