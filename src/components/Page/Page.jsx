// @flow strict

import * as React from "react";

import { useContextStrict } from "hooks/useContextStrict";
import { PlayerContext } from "contexts/PlayerContext";

import { PageWrapper } from "./styled/PageWrapper";
import { PageLoader } from "./styled/PageLoader";

type TProps = {
  children: React.Node,
  centered?: boolean,
  hasLoader?: boolean
};

export const Page = (props: TProps) => {
  const { children, centered, hasLoader } = props;

  const { playingTrackId } = useContextStrict(PlayerContext);

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
