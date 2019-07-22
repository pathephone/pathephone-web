// @flow strict
import * as React from "react";

import { PlayerControls } from "./nested/PlayerControls";
import { PlayerContent } from "./nested/PlayerContent";
import { SearchControls } from "./nested/SearchControls/index";
import { OverviewControls } from "./nested/OverviewControls/index";
import { usePlayingTrackId } from "hooks/usePlayingTrackId";
import { usePlayerScreen } from "hooks/usePlayerScreen";

type TProps = {||};

export const PlayerScreen = (props: TProps) => {
  const screen = usePlayerScreen();

  const playingTrackId = usePlayingTrackId();

  const hasPlayerControls = playingTrackId !== null;

  const hasSearchControls = screen === "SEARCH";

  const hasNavigationControls = screen === "OVERVIEW";

  return (
    <>
      <PlayerContent />
      {hasSearchControls && <SearchControls />}
      {hasNavigationControls && <OverviewControls />}
      {hasPlayerControls && <PlayerControls />}
    </>
  );
};
