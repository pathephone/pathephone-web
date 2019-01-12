// @flow strict

import * as React from 'react';

import styles from './AlbumCoverInput.module.css';

type TWrapperProps = {|
  children: React.Node;  
|}

export const AlbumCoverInputWrapper = ({ children }: TWrapperProps) => (
  <label className={styles.AlbumCoverInput__Wrapper}>
    {children}
  </label>
)

type TPreviewProps = {|
  src: string;  
|}

export const AlbumCoverInputPreview = ({ src }: TPreviewProps) => (
  <img src={src} className={styles.AlbumCoverInput__Preview} />
)

type TInputProps = {|
  onChange(e: SyntheticEvent<HTMLInputElement>): void;
|}

export const AlbumCoverInput = ({ onChange }: TInputProps) => (
  <input 
    className={styles.AlbumCoverInput__Input}
    type="file" 
    name="cover"
    onChange={onChange}
  />
)