// @flow strict

import * as React from "react";

import styles from "./AlbumEditor.module.css";
import { testId } from "util/testId";

type TProps = {|
  children: React.Node,
  onSubmit(): void
|};

export const AlbumEditorWrapper = (props: TProps) => {
  const { children, onSubmit } = props;

  const handleSubmit = React.useCallback(
    (event: SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit();
    },
    [onSubmit]
  );

  return (
    <form
      className={styles.AlbumEditor__Wrapper}
      data-testid={testId.SHARE_ALBUM_PAGE__ALBUM_EDITOR}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};
