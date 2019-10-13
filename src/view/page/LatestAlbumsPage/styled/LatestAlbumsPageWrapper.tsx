import * as React from "react";

import { testId } from "util/testId";

import styles from "./LatestAlbumsPage.module.css";

type TProps = {
  children: React.ReactNode;
  mod: "feed";
};

export const LatestAlbumsPageWrapper = ({ children, mod }: TProps) => {
  const testIdMod = React.useMemo(() => {
    switch (mod) {
      case "feed":
        return testId.LATEST_LABUMS_PAGE__FEED;
      default:
        return null;
    }
  }, [mod]);

  const classNameMod = React.useMemo(() => {
    switch (mod) {
      case "feed":
        return styles.LatestAlbumsPage__Wrapper_feed;
      default:
        return "";
    }
  }, [mod]);

  const className = `${styles.LatestAlbumsPage__Wrapper} ${classNameMod}`;

  return (
    <div className={className} data-testid={testIdMod}>
      {children}
    </div>
  );
};
