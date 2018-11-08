// @flow strict

import * as React from "react";

import styles from "./TrackInputs.module.css";

type TProps = {|
  children: React.Node
|};

export const TrackInputsWrapper = (props: TProps) => (
  <div {...props} className={styles.TrackInputs__Wrapper} />
);

export const TrackInputsCommon = (props: TProps) => (
  <div {...props} className={styles.TrackInputs__Common} />
);

export const TrackInputsArtists = (props: TProps) => (
  <div {...props} className={styles.TrackInputs__Artists} />
);

export const TrackInputsControls = (props: TProps) => (
  <div {...props} className={styles.TrackInputs__Controls} />
);

type TButtonProps = {|
  ...TProps,
  onClick(): void,
  isDisabled?: boolean
|};

export const TrackInputsButton = ({
  isDisabled,
  ...buttonProps
}: TButtonProps) => (
  <button
    type="button"
    disabled={isDisabled}
    className={styles.TrackInputs__Button}
    {...buttonProps}
  />
);
