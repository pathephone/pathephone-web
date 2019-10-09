// @flow strict

import * as React from "react";

import { Spinner } from "view/kit/Spinner/index";

import styles from "./LoadMoreButton.module.css";

type TProps = {|
  onClick(): void,
  text: string,
  hasLoader?: boolean,
  disabled?: boolean,
  buttonTestId?: string,
  loaderTestId?: string
|};

export const LoadMoreButton = ({
  onClick,
  disabled,
  hasLoader,
  text,
  buttonTestId,
  loaderTestId
}: TProps) => {
  return (
    <button
      className={styles.LoadMoreButton}
      data-testid={buttonTestId}
      onClick={onClick}
      disabled={disabled}
    >
      {hasLoader === true ? (
        <div data-testid={loaderTestId}>
          <Spinner />
        </div>
      ) : (
        text
      )}
    </button>
  );
};
