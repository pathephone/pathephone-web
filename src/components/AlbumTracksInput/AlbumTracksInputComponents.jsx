// @flow strict

import * as React from 'react';

import styles from './AlbumTracksInput.module.css';

type TWrapperProps = {|
  children: React.Node;  
|}

export const AlbumTracksInputWrapper = ({ children }: TWrapperProps) => (
  <label className={styles.AlbumTracksInput__Wrapper}>
    {children}
  </label>
)

type TInputProps = {|
  onChange(e: SyntheticEvent<HTMLInputElement>): void;
|}

export const AlbumTracksInput = ({ onChange }: TInputProps) => (
  <input 
    className={styles.AlbumTracksInput__Input}
    type="file" 
    name="tracks"
    onChange={onChange}
  />
)

type TCustomButtonProps = {|
  text: string;
|}

export const AlbumTracksInputCustomButton = ({ text }: TCustomButtonProps) => (
  <div className={styles.AlbumTracksInput__CustomButton}>
    {text}
  </div>
)