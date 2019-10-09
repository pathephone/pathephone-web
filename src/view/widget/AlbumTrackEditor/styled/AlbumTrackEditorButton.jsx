// @flow strict

import * as React from "react";

import styles from "./AlbumTrackEditor.module.css";

type TProps = {|
  children: React.Node,
  isDisabled?: boolean,
  testId?: string,
  onClick(): void
|};

export const AlbumTrackEditorButton = ({
  isDisabled,
  testId,
  ...buttonProps
}: TProps) => (
  <button
    {...buttonProps}
    type="button"
    disabled={isDisabled}
    className={styles.AlbumTrackEditor__Button}
    data-testid={testId}
  />
);
