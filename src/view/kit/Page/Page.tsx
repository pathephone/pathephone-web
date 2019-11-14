import * as React from "react";

import { PageWrapper } from "./styled/PageWrapper";
import { PageLoader } from "./styled/PageLoader";

import { usePlayerState } from "hook/usePlayerState";

type TProps = {
  children: React.ReactNode;
  centered?: boolean;
  hasLoader?: boolean;
};

export const Page = (props: TProps) => {
  const { children, centered, hasLoader } = props;

  const { playingTrackId } = usePlayerState();

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
