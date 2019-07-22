// @flow strict

import React from "react";

import { SyncIcon } from "icons/round-sync";

import styles from "./ShareAlbumPage.module.css";
import { testId } from "utils/testId";

export const ShareAlbumPageLoader = () => (
  <div
    className={styles.ShareAlbumPage__Loader}
    data-testid={testId.SHARE_ALBUM_PAGE__LOADER}
  >
    <SyncIcon className={styles.ShareAlbumPage__Spinner} />
  </div>
);
