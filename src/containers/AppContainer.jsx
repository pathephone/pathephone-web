// @flow strict

import type { TServicesContext } from "types/contextTypes";

import * as React from "react";

import { AppLoadingScreen } from "components/App/AppLoadingScreen";
import { ServicesContext } from "contexts/ServicesContext";
import { useContextStrict } from "hooks/useContextStrict";
import { usePromiseEffect } from "hooks/usePromiseEffect";
import { PlayerScreenContainer } from "containers/PlayerScreenContainer";
import { Theme } from "components/Themes/ThemesComponents";
import { AppWrapper } from "components/App/AppWrapper";

type TProps = {||};

export const AppContainer = (props: TProps) => {
  const { startApp } = useContextStrict<TServicesContext>(ServicesContext);

  const { isPending, isSucceeded } = usePromiseEffect<void>(startApp, []);

  return (
    <Theme>
      <AppWrapper>
        {isPending && <AppLoadingScreen />}
        {isSucceeded && <PlayerScreenContainer />}
      </AppWrapper>
    </Theme>
  );
};
