// @flow strict

import * as React from "react";

import { PlayerContext } from "contexts/PlayerContext";
import { useContextStrict } from "hooks/useContextStrict";
import { PlaylistTrackContainer } from "./PlaylistTrackContainer";
import {
  PlaylistPopup,
  PlaylistHeader,
  PlaylistBody
} from "components/Playlist/PlaylistConponents";

type TProps = {||};

export const PlaylistPopupContainer = (props: TProps) => {
  const { playlist, clearPlaylist } = useContextStrict(PlayerContext);

  const handleClearPlaylist = () => {
    clearPlaylist();
  };

  return (
    <PlaylistPopup>
      <PlaylistHeader
        tracksCount={playlist.length}
        onClearPlaylist={handleClearPlaylist}
      />
      <PlaylistBody>
        {playlist.map(track => (
          <PlaylistTrackContainer track={track} key={track.id} />
        ))}
      </PlaylistBody>
    </PlaylistPopup>
  );
};
