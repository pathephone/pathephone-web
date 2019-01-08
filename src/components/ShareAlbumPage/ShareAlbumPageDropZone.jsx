// @flow strict

import type { TFormAlbum } from "types/uiDataTypes";

import * as React from 'react';

import { getAlbumFormDataFromFiles } from 'utils/getAlbumFormDataFromFiles';
import { delayPromise } from 'utils/delayPromise';

import styles from './ShareAlbumPage.module.css'

type TProps = {|
  onDataChange(data: TFormAlbum): void;
|}

export const ShareAlbumPageDropZone = (props: TProps) => {

  const { onDataChange } = props;

  const [ error, setError ] = React.useState<Error | null>(null);
  const [ hasPreloader, setHasPreloader ] = React.useState<boolean>(false);

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    setHasPreloader(true);
    setError(null);
    delayPromise(
      getAlbumFormDataFromFiles(files), 500
    )
      .then(onDataChange)
      .catch(setError)
      .then(() => {
        setHasPreloader(false)
      })
  }

  return (
    <div className={styles.DropZone__Wrapper}>
      <label className={styles.DropZone__Label}>
        <input
          type="file"
          multiple
          disabled={hasPreloader}
          className={styles.DropZone__Input}
          onChange={handleChange}
        />
        <div className={styles.DropZone__Messages}>
          {
            hasPreloader ? (
              <p>processing...</p>
            ) : (
              <p>drop files here</p>
            )
          }
          {
            error && (
              <small>{error.message}</small>
            )
          }
        </div>
      </label>
    </div>
  )
}
