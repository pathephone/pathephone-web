// @flow strict

import * as React from 'react';

import styles from './AlbumForm.module.css';

type TWrapperProps = {|
  children: React.Node;
  onSubmit(e: SyntheticEvent<HTMLFormElement>): void;
|}

export const AlbumFormWrapper = (props: TWrapperProps) => (
  <form {...props} className={styles.AlbumForm__Wrapper} />
)

type TFieldsetProps = {|
  children: React.Node;
  title: string;
|}

export const AlbumFormFieldset = ({ title, children }: TFieldsetProps) => (
  <fieldset className={styles.AlbumForm__Fieldset}>
    <legend>{title}</legend>
    {children}
  </fieldset>
)