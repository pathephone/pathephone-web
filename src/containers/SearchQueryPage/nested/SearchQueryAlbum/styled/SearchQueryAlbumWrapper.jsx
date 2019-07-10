// @flow strict

import * as React from "react";

import { UnreachableError } from "data/errors";

import { testId } from "utils/testId";

import styles from "./SearchQueryAlbum.module.css";

type TProps = {|
  children: React.Node,
  mod: "root" | "group" | "info"
|};

export const SearchQueryAlbumWrapper = (props: TProps) => {
  const { children, mod } = props;

  const testIdMod = React.useMemo(() => {
    switch (mod) {
      case "root":
        return testId.SEARCH_QUERY_ALBUM__ROOT_WRAPPER;
      default:
        return null;
    }
  }, [mod]);

  const classNameMod = React.useMemo(() => {
    switch (mod) {
      case "root":
        return styles.SearchQueryAlbum__Wrapper_root;
      case "group":
        return styles.SearchQueryAlbum__Wrapper_group;
      case "info":
        return styles.SearchQueryAlbum__Wrapper_info;
      default:
        throw new UnreachableError(mod);
    }
  }, [mod]);

  const className = `${styles.SearchQueryAlbum__Wrapper} ${classNameMod}`;

  return (
    <div className={className} data-testid={testIdMod}>
      {children}
    </div>
  );
};
