export const getRootHistory = () => {
  if (process.env.NODE_ENV === "test") {
    const { createMemoryHistory } = require("history");

    return createMemoryHistory();
  } else {
    const { createBrowserHistory } = require("history");

    return createBrowserHistory();
  }
};
