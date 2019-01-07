// @flow strict

import * as React from 'react';

import styles from './ShareAlbumPage.module.css'
import { filterFilesToAudioFiles, filterFilesToImageFiles } from 'utils/filterFiles';

type TProps = {|
  onChange(e: SyntheticEvent<HTMLInputElement>): void;
|}

export const ShareAlbumPageDropZone = (props: TProps) => {

  const { onChange } = props;

  return (
    <div className={styles.DropZone__Wrapper}>
      <label className={styles.DropZone__Label}>
        <input
          type="file"
          multiple
          className={styles.DropZone__Input}
          onChange={onChange}
        />
        <div className={styles.DropZone__Message}>
          drop files here
        </div>
      </label>
    </div>
  )
}
