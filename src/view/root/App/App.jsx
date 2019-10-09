// @flow strict

import * as React from "react";

import { PlayerProvider } from "providers/PlayerProvider";
import { useGetIntlService } from "hooks/useGetIntlService";
import { PlayerScreen } from "view/root/PlayerScreen";
import { useAppState } from "hooks/useAppState";

import { AppWrapper } from "./styled/AppWrapper";
import { AppLoader } from "./styled/AppLoader";

type TProps = {||};

export const App = (props: TProps) => {
  useGetIntlService();

  const { activeScreen } = useAppState();

  return (
    <AppWrapper>
      {activeScreen === "LOADING" && <AppLoader />}
      {activeScreen === "PLAYER" && (
        <PlayerProvider>
          <PlayerScreen />
        </PlayerProvider>
      )}
    </AppWrapper>
  );
};
