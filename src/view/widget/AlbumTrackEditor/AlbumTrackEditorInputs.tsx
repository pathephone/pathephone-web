import * as React from "react";

import { useTrackCandidateStrict } from "hook/useAlbumForm";

import { AlbumTrackEditorCommon } from "./styled/AlbumTrackEditorCommon";
import { AlbumTrackEditorTitleInput } from "./AlbumTrackEditorTitleInput";
import { AlbumTrackEditorArtistInput } from "./AlbumTrackEditorArtistInput";
import { AlbumTrackEditorLabel } from "./styled/AlbumTrackEditorLabel";

type TProps = {
  trackId: string;
};

export const AlbumTrackEditorInputs = (props: TProps) => {
  const { trackId } = props;

  const track = useTrackCandidateStrict(trackId);

  const artistInputsNode = React.useMemo(
    () =>
      track.artists.map((artist, artistIndex) => {
        return (
          <AlbumTrackEditorArtistInput
            key={artist.id}
            trackId={trackId}
            artist={artist}
            artistIndex={artistIndex}
          />
        );
      }),
    [track.artists, trackId]
  );

  return (
    <AlbumTrackEditorCommon>
      <AlbumTrackEditorLabel text={track.audio.name} />
      <AlbumTrackEditorTitleInput trackId={trackId} />
      {artistInputsNode}
    </AlbumTrackEditorCommon>
  );
};
