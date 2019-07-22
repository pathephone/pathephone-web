// @flow strict

import * as React from "react";

import { useAlbumFormDataStrict } from "hooks/useAlbumForm";

import { AlbumEditorFieldset } from "./styled/AlbumEditorFieldset";
import { AlbumEditorFieldsetTitle } from "./styled/AlbumEditorFieldsetTitle";
import { AlbumEditorAboutFieldsetBody } from "./styled/AlbumEditorFieldsetBody";

import { AlbumTrackEditor } from "./nested/AlbumTrackEditor";
import { AlbumAudioEditor } from "./nested/AlbumAudioEditor";

export const AlbumEditorTracklist = () => {
  const { tracklist } = useAlbumFormDataStrict();

  const trackInputsNode = React.useMemo(
    () =>
      tracklist.map((track, trackIndex, tracklist) => (
        <AlbumTrackEditor
          key={track.id}
          trackId={track.id}
          moveUpDisabled={trackIndex === 0}
          moveDownDisabled={trackIndex === tracklist.length - 1}
        />
      )),
    [tracklist]
  );

  return (
    <AlbumEditorFieldset>
      <AlbumEditorFieldsetTitle text="Tracklist" />
      <AlbumEditorAboutFieldsetBody>
        {trackInputsNode}
      </AlbumEditorAboutFieldsetBody>
      <AlbumAudioEditor />
    </AlbumEditorFieldset>
  );
};
