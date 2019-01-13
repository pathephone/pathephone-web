// @flow strict

import * as React from 'react';

import { Card } from 'components/Card/CardComponents';

import styles from './AlbumForm.module.css';

type TWrapperProps = {|
  children: React.Node;
  onSubmit(e: SyntheticEvent<HTMLFormElement>): void;
|}

export const AlbumFormWrapper = (props: TWrapperProps) => (
  <form {...props} className={styles.AlbumForm__Wrapper} />
)

type TAboutBlockProps = {|
  children: React.Node;
|}

export const AlbumFormAboutBlock = ({ children }: TAboutBlockProps) => (
  <div className={styles.AlbumForm__AboutBlock}>
    {children}
  </div>
)

type TAboutInputsProps = {|
  children: React.Node;
|}

export const AlbumFormAboutInputs = ({ children }: TAboutInputsProps) => (
  <Card withPadding>
    <div className={styles.AlbumForm__AboutInputs}>
      {children}
    </div>
  </Card>
)

type TFooterProps = {|
  children: React.Node;
|}

export const AlbumFormFooter = ({ children }: TFooterProps) => (
  <div className={styles.AlbumForm__Footer}>
    {children}
  </div>
)

type TButtonProps = {|
  children: string;
  onClick(): void;
|}

export const AlbumFormButton = ({ children, onClick }: TButtonProps) => (
  <button onClick={onClick} className={styles.AlbumForm__Button}>
    {children}
  </button>
)