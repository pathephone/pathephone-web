// @flow strict

import * as React from "react";

import styles from "./AlbumsPage.module.css";

type TProps = {|
  children: React.Node
|};

export const AlbumsPageWrapper = (props: TProps) => (
  <div className={styles.AlbumsPage__Wrapper} {...props} />
);
