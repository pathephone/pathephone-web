// @flow strict
import type { TPlaylistTrack } from "types/state";

import * as React from "react";

import { PlayerContext } from "contexts/PlayerContext";
import { getUniqueString } from "utils/getUniqueString";

import { Header } from "./nested/Header";
import { PlayerControls } from "./nested/PlayerControls";
import { Content } from "./nested/Content/index";

type TProps = {||};

const fakeId = getUniqueString();
const fakeId2 = getUniqueString();

export const PlayerScreen = (props: TProps) => {
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
      <Content />
      <Header />
      <PlayerControls />
    </PlayerContext.Provider>
  );
};
