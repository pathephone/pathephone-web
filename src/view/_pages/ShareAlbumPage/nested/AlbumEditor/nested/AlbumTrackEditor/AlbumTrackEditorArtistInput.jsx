// @flow strict

import type { TAlbumFormArtist } from "types/state";

import * as React from "react";

import { FloatingLabelInput } from "view/_ui/FloatingLabelInput";
import { useDispatch } from "hooks/useDispatch";
import { useAlbumFormArtistValidity } from "hooks/useAlbumForm";
import { testId } from "utils/testId";

type TProps = {
  trackId: string,
  artist: TAlbumFormArtist,
  artistIndex: number
};

export const AlbumTrackEditorArtistInput = (props: TProps) => {
  const { trackId, artist, artistIndex } = props;

  const dispatch = useDispatch();

  const valid = useAlbumFormArtistValidity({
    trackId,
    artistId: artist.id
  });

  const handleArtistChange = React.useCallback(
    (event: SyntheticEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget;

      dispatch({
        type: "ALBUM_TRACK_EDITOR__ARTIST_CHANGE",
        payload: { trackId, artistId: artist.id, value }
      });
    },
    [artist.id, dispatch, trackId]
  );

  const validationMessage = !valid ? "Required field" : undefined;

  return (
    <FloatingLabelInput
      inputTestId={testId.ALBUM_ARTIST_EDITOR__ARTIST_NAME_INPUT}
      validationTestId={testId.ALBUM_ARTIST_EDITOR__ARTIST_NAME_VALIDATION}
      key={artist.id}
      name="name"
      value={artist.name}
      validationMessage={validationMessage}
      placeholder={`Track artist #${artistIndex + 1}`}
      onChange={handleArtistChange}
    />
  );
};
