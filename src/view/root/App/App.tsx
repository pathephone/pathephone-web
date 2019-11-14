import * as React from "react";

import { useGetIntlService } from "hook/useGetIntlService";
import { PlayerScreen } from "view/root/PlayerScreen";

import { AppWrapper } from "./styled/AppWrapper";
import { AppLoader } from "./styled/AppLoader";
import { useViewState } from "hook/useViewState";

type TProps = {};

export const App = (props: TProps) => {
  useGetIntlService();

  const { activeScreen } = useViewState();

  return (
    <AppWrapper>
      {activeScreen === "LOADING" && <AppLoader />}
      {activeScreen === "PLAYER" && <PlayerScreen />}
    </AppWrapper>
  );
};
