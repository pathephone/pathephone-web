// @flow strict
import * as React from "react";

import { PlayerControls } from "view/widget/PlayerControls";
import { SearchControls } from "view/widget/SearchControls/index";
import { OverviewControls } from "view/widget/OverviewControls/index";
import { PlayerContent } from "view/root/PlayerContent";
import { usePlayingTrackId } from "hook/usePlayingTrackId";
import { usePlayerScreen } from "hook/usePlayerScreen";

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
