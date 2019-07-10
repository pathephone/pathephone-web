// @flow strict

import * as React from "react";

import { UnreachableError } from "data/errors";

import styles from "./SearchQueryAlbum.module.css";

type TProps = {|
  children: React.Node,
  mod: "delete" | "save",
  onClick(): void
|};

export const SearchQueryAlbumButton = (props: TProps) => {
  const { mod, children, onClick } = props;

  const classNameMod = React.useMemo(() => {
    switch (mod) {
      case "delete":
        return styles.SearchQueryAlbum__Button_delete;
      case "save":
        return styles.SearchQueryAlbum__Button_save;
      default:
        throw new UnreachableError(mod);
    }
  }, [mod]);

  const className = `${styles.SearchQueryAlbum__Button} ${classNameMod}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
