// @flow strict

import * as React from "react";

import { useAsync } from "hooks/useAsync";
import { useServices } from "hooks/useServices";
import { PlayerProvider } from "providers/PlayerProvider";

import { PlayerScreen } from "./nested/PlayerScreen";
import { AppWrapper } from "./styled/AppWrapper";
import { AppLoader } from "./styled/AppLoader";

type TProps = {||};

export const App = (props: TProps) => {
  const { startApp } = useServices();

  const [startPromiseState, injectStartPromise] = useAsync();

  React.useEffect(() => {
    injectStartPromise(startApp());
  }, [injectStartPromise, startApp]);

  const hasLoadingScreen = !startPromiseState || startPromiseState.pending;

  const hasPlayerScreen = !!startPromiseState && startPromiseState.resolved;

  return (
    <AppWrapper>
      {hasLoadingScreen && <AppLoader />}
      {hasPlayerScreen && (
        <PlayerProvider>
          <PlayerScreen />
        </PlayerProvider>
      )}
    </AppWrapper>
  );
};
