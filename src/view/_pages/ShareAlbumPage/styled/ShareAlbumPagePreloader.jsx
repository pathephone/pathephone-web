// @flow strict

import React from "react";

import { SyncIcon } from "icons/round-sync";

import styles from "./ShareAlbumPage.module.css";

export const ShareAlbumPagePreloader = () => (
  <div className={styles.ShareAlbumPage__Preloader}>
    <SyncIcon className={styles.ShareAlbumPage__Spinner} />
  </div>
);
