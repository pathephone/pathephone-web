// @flow strict

import * as React from "react";

import { testId } from "utils/testId";

import styles from "./LatestAlbumsPage.module.css";

type TProps = {|
  mod: "fallback",
  text: string
|};

export const LatestAlbumsPageText = (props: TProps) => {
  const { text, mod } = props;

  const testIdMod = React.useMemo(() => {
    switch (mod) {
      case "fallback":
        return testId.LATEST_LABUMS_PAGE__FALLBACK;
      default:
        return null;
    }
  }, [mod]);

  const classNameMod = React.useMemo(() => {
    switch (mod) {
      case "fallback":
        return styles.LatestAlbumsPage__Text_fallback;
      default:
        return "";
    }
  }, [mod]);

  const className = `${styles.LatestAlbumsPage__Text} ${classNameMod}`;

  return (
    <div className={className} data-testid={testIdMod}>
      {text}
    </div>
  );
};
