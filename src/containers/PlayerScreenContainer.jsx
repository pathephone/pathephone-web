// @flow strict
import type { TPlaylistTrack } from "types/stateTypes";

import * as React from "react";

import { PlayerScreenWrapper } from "components/PlayerScreen/PlayerScreenWrapper";
import { HeaderContainer } from "containers/HeaderContainer";
import { PageContainer } from "containers/PageContainer";
import { PlayerContext } from "contexts/PlayerContext";
import { getUniqueString } from "utils/getUniqueString";
import { PlayerControlsContainer } from "./PlayerControlsContainer";

type TProps = {||};

const fakeId = getUniqueString();
const fakeId2 = getUniqueString();

export const PlayerScreenContainer = (props: TProps) => {
  const [isPaused, setIsPaused] = React.useState<boolean>(false);
  const [isShuffle, setIsShuffle] = React.useState<boolean>(false);
  const [isRepeat, setIsRepeat] = React.useState<boolean>(false);
  const [playlist, setPlaylist] = React.useState<TPlaylistTrack[]>([
    {
      id: fakeId,
      title: "Wild Wild Wild Wild Wild Wild West",
      artistName: "John Wayne",
      audioSrc: ""
    },
    {
      id: fakeId2,
      title: "Some shitty pop song from your girlfriend's vk feed",
      artistName: "Bon Kabon",
      audioSrc: ""
    }
  ]);
  const [playingTrackId, setPlayingTrackId] = React.useState<string | null>(
    fakeId
  );

  const clearPlaylist = () => {
    setPlaylist([]);
    setPlayingTrackId(null);
  };

  const addPlaylistTracks = (tracks: TPlaylistTrack[]) => {
    setPlaylist([...playlist, ...tracks]);
  };

  const removePlaylistTrack = (id: string) => {
    setPlaylist(playlist.filter(track => track.id !== id));
  };

  const toggleIsPaused = () => {
    setIsPaused(state => !state);
  };

  const toggleIsShuffle = () => {
    setIsShuffle(state => !state);
  };

  const toggleIsRepeat = () => {
    setIsRepeat(state => !state);
  };

  const playerContextValue = {
    playlist,
    isPaused,
    isShuffle,
    isRepeat,
    playingTrackId,

    setPlayingTrackId,
    addPlaylistTracks,
    removePlaylistTrack,
    clearPlaylist,
    toggleIsPaused,
    toggleIsRepeat,
    toggleIsShuffle
  };

  return (
    <PlayerContext.Provider value={playerContextValue}>
      <PlayerScreenWrapper>
        <PageContainer />
        <HeaderContainer />
        <PlayerControlsContainer />
      </PlayerScreenWrapper>
    </PlayerContext.Provider>
  );
};
