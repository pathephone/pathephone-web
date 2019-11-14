import * as React from "react";

import { useDispatch } from "hook/useDispatch";
import { PlaylistTrack } from "view/widget/PlaylistTrack";
import { usePlaylistTrackPreviews } from "hook/usePlaylistTrackPreviews";

import { PlaylistPopupWrapper } from "./styled/PlaylistPopupWrapper";
import { PlaylistPopupHeader } from "./styled/PlaylistPopupHeader";
import { PlaylistPopupBody } from "./styled/PlaylistPopupBody";

type TProps = {};

export const PlaylistPopup = (props: TProps) => {
  const playlistTrackPreviews = usePlaylistTrackPreviews();

  const dispatch = useDispatch();

  const handleClearPlaylist = React.useCallback(() => {
    dispatch({
      type: "PLAYLIST_POPUP__CLEAR"
    });
  }, [dispatch]);

  const playlistNode = React.useMemo(
    () =>
      playlistTrackPreviews.map(trackPreview => (
        <PlaylistTrack track={trackPreview} key={trackPreview.id} />
      )),
    [playlistTrackPreviews]
  );

  const tracksCount = playlistTrackPreviews.length;

  return (
    <PlaylistPopupWrapper>
      <PlaylistPopupHeader
        tracksCount={tracksCount}
        onClearPlaylist={handleClearPlaylist}
      />
      <PlaylistPopupBody>{playlistNode}</PlaylistPopupBody>
    </PlaylistPopupWrapper>
  );
};
