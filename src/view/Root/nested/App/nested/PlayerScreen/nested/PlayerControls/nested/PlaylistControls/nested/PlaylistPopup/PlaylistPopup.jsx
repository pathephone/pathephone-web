// @flow strict

import * as React from "react";

import { PlayerContext } from "contexts/PlayerContext";
import { useContextStrict } from "hooks/useContextStrict";

import { PlaylistTrack } from "./nested/PlaylistTrack";

import { PlaylistPopupWrapper } from "./styled/PlaylistPopupWrapper";
import { PlaylistPopupHeader } from "./styled/PlaylistPopupHeader";
import { PlaylistPopupBody } from "./styled/PlaylistPopupBody";

type TProps = {||};

export const PlaylistPopup = (props: TProps) => {
  const { playlist, clearPlaylist } = useContextStrict(PlayerContext);

  const handleClearPlaylist = clearPlaylist;

  const tracksNode = React.useMemo(
    () => playlist.map(track => <PlaylistTrack track={track} key={track.id} />),
    [playlist]
  );

  return (
    <PlaylistPopupWrapper>
      <PlaylistPopupHeader
        tracksCount={playlist.length}
        onClearPlaylist={handleClearPlaylist}
      />
      <PlaylistPopupBody>{tracksNode}</PlaylistPopupBody>
    </PlaylistPopupWrapper>
  );
};
