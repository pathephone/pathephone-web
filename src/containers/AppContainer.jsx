// @flow strict

import type { TServicesContext } from "types/contextTypes";

import * as React from "react";

import { AppLoadingScreen } from "components/App/AppLoadingScreen";
import { ServicesContext } from "contexts/ServicesContext";
import { useContextStrict } from "hooks/useContextStrict";
import { PlayerScreenContainer } from "containers/PlayerScreenContainer";
import { Theme } from "components/Themes/ThemesComponents";
import { AppWrapper } from "components/App/AppWrapper";
import { useAsync } from "hooks/useAsync";

type TProps = {||};

export const AppContainer = (props: TProps) => {
  const { startApp } = useContextStrict<TServicesContext>(ServicesContext);

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
