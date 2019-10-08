// @flow strict

export const SERVICE_MOCK_DELAY = 400;

export const ALBUMS_FEED_PER_PAGE_LIMIT = 20;

export const ALBUMS_SEARCH_INTERVAL = 5000;

export const ROUTER_BASENAME = (() => {
  if (process.env.NODE_ENV === "production") {
    return "/pathephone-web";
  }

  return "";
})();
