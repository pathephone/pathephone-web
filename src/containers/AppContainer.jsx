// @flow strict

import type { TServicesContext } from "types/contextTypes";

import * as React from "react";

import { AppLoadingScreen } from "components/App/AppLoadingScreen";
import { ServicesContext } from "contexts/ServicesContext";
import { useContextStrict } from "hooks/useContextStrict";
import { usePromiseEffect } from "hooks/usePromiseEffect";
import { PlayerScreenContainer } from "containers/PlayerScreenContainer";

type TProps = {||};

export const AppContainer = (props: TProps) => {
  const { startApp } = useContextStrict<TServicesContext>(ServicesContext);

  const { isPending, isSucceeded } = usePromiseEffect<void>(startApp, []);

  return (
    <>
      {isPending && <AppLoadingScreen />}
      {isSucceeded && <PlayerScreenContainer />}
    </>
  );
};
