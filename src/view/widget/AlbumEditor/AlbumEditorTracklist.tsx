import * as React from "react";

import { useAlbumCandidateStrict } from "hook/useAlbumForm";

import { AlbumEditorFieldset } from "./styled/AlbumEditorFieldset";
import { AlbumEditorFieldsetTitle } from "./styled/AlbumEditorFieldsetTitle";
import { AlbumEditorAboutFieldsetBody } from "./styled/AlbumEditorFieldsetBody";

import { AlbumTrackEditor } from "view/widget/AlbumTrackEditor";
import { AlbumAudioEditor } from "view/widget/AlbumAudioEditor";
import { useIntlDictionary } from "hook/useIntl";

export const AlbumEditorTracklist = () => {
  const {
    albumEditor: { tracklistFieldsetTitleText }
  } = useIntlDictionary();

  const { tracklist } = useAlbumCandidateStrict();

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
      <AlbumEditorFieldsetTitle text={tracklistFieldsetTitleText} />
      <AlbumEditorAboutFieldsetBody>
        {trackInputsNode}
      </AlbumEditorAboutFieldsetBody>
      <AlbumAudioEditor />
    </AlbumEditorFieldset>
  );
};
