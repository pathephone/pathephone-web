import * as React from "react";

import { useDispatch } from "hook/useDispatch";
import { usePlayerContext } from "hook/usePlayerContext";
import { PlaylistTrack } from "view/widget/PlaylistTrack";

import { PlaylistPopupWrapper } from "./styled/PlaylistPopupWrapper";
import { PlaylistPopupHeader } from "./styled/PlaylistPopupHeader";
import { PlaylistPopupBody } from "./styled/PlaylistPopupBody";

type TProps = {};

export const PlaylistPopup = (props: TProps) => {
  const { playlist } = usePlayerContext();

  const dispatch = useDispatch();

  const handleClearPlaylist = React.useCallback(() => {
    dispatch({
      type: "PLAYLIST_POPUP__CLEAR"
    });
  }, [dispatch]);

  const playlistNode = React.useMemo(
    () => playlist.map(track => <PlaylistTrack track={track} key={track.id} />),
    [playlist]
  );

  return (
    <PlaylistPopupWrapper>
      <PlaylistPopupHeader
        tracksCount={playlist.length}
        onClearPlaylist={handleClearPlaylist}
      />
      <PlaylistPopupBody>{playlistNode}</PlaylistPopupBody>
    </PlaylistPopupWrapper>
  );
};
