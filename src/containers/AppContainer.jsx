// @flow strict

import * as React from "react";

import { AppLoadingScreen } from "components/App/AppLoadingScreen";
import { PlayerScreenContainer } from "containers/PlayerScreenContainer";
import { Theme } from "components/Themes/ThemesComponents";
import { AppWrapper } from "components/App/AppWrapper";
import { useAsync } from "hooks/useAsync";
import { useServices } from "hooks/useServices";

type TProps = {||};

export const AppContainer = (props: TProps) => {
  const { startApp } = useServices();

  const [startState, onStartApp] = useAsync(startApp);

  React.useEffect(() => {
    onStartApp();
  }, [onStartApp]);

  const hasLoadingScreen = !startState || startState.pending;

  const hasPlayerScreen = !!startState && startState.resolved;

  return (
    <Theme>
      <AppWrapper>
        {hasLoadingScreen && <AppLoadingScreen />}
        {hasPlayerScreen && <PlayerScreenContainer />}
      </AppWrapper>
    </Theme>
  );
};
