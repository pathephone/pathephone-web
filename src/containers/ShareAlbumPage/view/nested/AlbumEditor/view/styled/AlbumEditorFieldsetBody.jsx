// @flow strict

import * as React from "react";

import styles from "./AlbumEditor.module.css";

type TProps = {|
  children: React.Node,
  withPadding?: boolean
|};

export const AlbumEditorAboutFieldsetBody = ({
  children,
  withPadding
}: TProps) => (
  <div
    className={`${styles.AlbumEditor__FieldsetBody} ${
      withPadding === true ? styles.AlbumEditor__FieldsetBody_padding : ""
    }`}
  >
    {children}
  </div>
);
