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
  children: React.Node;  
|}

export const AlbumCoverInputPreview = (props: TPreviewProps) => (
  <div className={styles.AlbumCoverInput__Preview} {...props} />
)

type TImageProps = {|
  src: string;  
|}

export const AlbumCoverInputImage = ({ src }: TImageProps) => (
  <img src={src} className={styles.AlbumCoverInput__Image} />
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