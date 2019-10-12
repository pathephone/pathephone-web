// @flow strict

import { useParams } from "react-router";

import { RouterParamsError } from "util/error";

export const useSearchAlbumsPageQuery = () => {
  const params = useParams();

  if (typeof params.query === "string") {
    return params.query;
  }

  throw new RouterParamsError();
};
