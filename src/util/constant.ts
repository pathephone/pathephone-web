export const SERVICE_MOCK_DELAY = 400;

export const ALBUMS_FEED_PER_PAGE_LIMIT = 20;

export const ALBUMS_SEARCH_INTERVAL = (() => {
  if (process.env.NODE_ENV === "test") {
    return 100;
  } else {
    return 5000;
  }
})();
