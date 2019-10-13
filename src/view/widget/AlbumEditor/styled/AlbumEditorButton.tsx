import * as React from "react";

import styles from "./AlbumEditor.module.css";

type TProps = {
  children: string;
  testId: string;
  submit?: boolean;
  onClick?: () => void;
};

export const AlbumEditorButton = ({
  children,
  submit,
  testId,
  onClick
}: TProps) => (
  <button
    onClick={onClick}
    className={`${styles.AlbumEditor__Button} ${
      submit === true
        ? styles.AlbumEditor__Button_primary
        : styles.AlbumEditor__Button_secondary
    }`}
    type={submit === true ? "submit" : "button"}
    data-testid={testId}
  >
    {children}
  </button>
);
