// @flow strict

import * as React from 'react';

type TProps = {|
  onChange(files: FileList): void;
|}

export const AlbumDropZoneContainer = (props: TProps) => {

  const { onChange } = props;

  // Render form

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    onChange(files)
  }

  return (
    <div>
      <input
        type="file"
        onChange={handleChange}
      />
    </div>
  )
}
