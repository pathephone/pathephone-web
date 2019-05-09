// @flow strict

import * as React from "react";

import styles from "./AlbumTrackEditor.module.css";

type TProps = {|
  children: React.Node,
  onClick(): void,
  isDisabled?: boolean
|};

export const AlbumTrackEditorButton = ({
  isDisabled,
  ...buttonProps
}: TProps) => (
  <button
    type="button"
    disabled={isDisabled}
    className={styles.AlbumTrackEditor__Button}
    {...buttonProps}
  />
);
