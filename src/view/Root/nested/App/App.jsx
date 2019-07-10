// @flow strict

import * as React from "react";

import { useAsync } from "hooks/useAsync";
import { useServices } from "hooks/useServices";

import { PlayerScreen } from "./nested/PlayerScreen";
import { AppWrapper } from "./styled/AppWrapper";
import { AppLoader } from "./styled/AppLoader";

type TProps = {||};

export const App = (props: TProps) => {
  const { startApp } = useServices();

  const [startState, onStartApp] = useAsync(startApp);

  React.useEffect(() => {
    onStartApp();
  }, [onStartApp]);

  const hasLoadingScreen = !startState || startState.pending;

  const hasPlayerScreen = !!startState && startState.resolved;

  return (
    <AppWrapper>
      {hasLoadingScreen && <AppLoader />}
      {hasPlayerScreen && <PlayerScreen />}
    </AppWrapper>
  );
};
