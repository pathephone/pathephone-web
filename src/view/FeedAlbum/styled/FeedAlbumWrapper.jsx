// @flow strict

import * as React from "react";

import styles from "./FeedAlbum.module.css";

import { testId } from "utils/testId";

type TProps = {|
  children: React.Node
|};

export const FeedAlbumWrapper = (props: TProps) => (
  <div
    className={styles.FeedAlbum__Wrapper}
    {...props}
    data-testid={testId.FEED_ALBUM_WRAPPER}
  />
);
