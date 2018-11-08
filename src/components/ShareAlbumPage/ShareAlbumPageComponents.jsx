// @flow strict

import * as React from "react";

import styles from "./ShareAlbumPage.module.css";

type TProps = {|
  children: React.Node
|};

export const ShareAlbumPageWrapper = (props: TProps) => (
  <div {...props} className={styles.ShareAlbumPage__Wrapper} />
);

export const ShareAlbumPageContent = (props: TProps) => (
  <div {...props} className={styles.ShareAlbumPage__Content} />
);

export const ShareAlbumPageFooter = (props: TProps) => (
  <div {...props} className={styles.ShareAlbumPage__Footer} />
);
