// @flow strict

import React from "react";

import { PlayerContext } from "contexts/PlayerContext";

export const usePlayerContext = () => {
  return React.useContext(PlayerContext);
};

export const useAudioStatus = () => {
  const { audioStatus } = usePlayerContext();

  return audioStatus;
};
