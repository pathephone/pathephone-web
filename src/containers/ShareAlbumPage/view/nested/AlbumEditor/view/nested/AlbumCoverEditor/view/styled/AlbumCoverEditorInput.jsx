// @flow strict

import * as React from "react";

import styles from "./AlbumCoverEditor.module.css";

type TProps = {|
  errorMessage?: string,
  onChange(e: SyntheticEvent<HTMLInputElement>): void
|};

export const AlbumCoverEditorInput = ({ onChange, errorMessage }: TProps) => {
  const inputNodeRef = React.useRef<null | HTMLInputElement>(null);

  React.useEffect(() => {
    const inputNode = inputNodeRef.current;
    if (inputNode && errorMessage !== undefined) {
      inputNode.setCustomValidity(errorMessage);
    }
  }, [errorMessage]);

  return (
    <input
      ref={inputNodeRef}
      className={styles.AlbumCoverEditor__Input}
      type="file"
      name="cover"
      onChange={onChange}
    />
  );
};
