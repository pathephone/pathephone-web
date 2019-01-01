// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

import { OutsideClickDetector } from 'components/OutsideClickDetector';

import styles from './MainMenu.module.css'

type TWrapperProps = {|
  children: React.Node;
  onOutsideClick(): void;
|}

export const MainMenuWrapper = (props: TWrapperProps) => (
  <OutsideClickDetector {...props} className={styles.MainMenu__Wrapper} />
)

type TNavigationProps = {|
  children: React.Node;
|}

export const MainMenuNavigation = (props: TNavigationProps) => (
  <nav {...props} className={styles.MainMenu__Navigation} />
)

type TLinkProps = {|
  children: React.Node;
  to: string;
  onClick(): void;
|}

export const MainMenuLink = (props: TLinkProps) => (
  <Link {...props} className={styles.MainMenu__Link} />
)

type TCloseButtonProps = {|
  children: React.Node;
  onClick(e: SyntheticEvent<HTMLButtonElement>): void; 
|}

export const MainMenuCloseButton = (props: TCloseButtonProps) => (
  <button {...props} className={styles.MainMenu__CloseButton} />
)