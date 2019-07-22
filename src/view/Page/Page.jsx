// @flow strict

import * as React from "react";

import { PageWrapper } from "./styled/PageWrapper";
import { PageLoader } from "./styled/PageLoader";

import { usePlayerContext } from "hooks/usePlayerContext";

type TProps = {|
  children: React.Node,
  centered?: boolean,
  hasLoader?: boolean
|};

export const Page = (props: TProps) => {
  const { children, centered, hasLoader } = props;

  const { playingTrackId } = usePlayerContext();

  const hasCompactView = playingTrackId !== null;

  return (
    <PageWrapper
      hasCompactView={hasCompactView}
      centered={centered === true || hasLoader === true}
    >
      {hasLoader === true ? <PageLoader /> : children}
    </PageWrapper>
  );
};
