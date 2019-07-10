// @flow strict

import type { TFormAlbum } from "types/state";

import * as React from "react";

import { FloatingLabelInput } from "components/FloatingLabelInput/FloatingLabelInput";

import { AlbumEditorWrapper } from "./styled/AlbumEditorWrapper";
import { AlbumEditorFooter } from "./styled/AlbumEditorFooter";
import { AlbumEditorButton } from "./styled/AlbumEditorButton";
import { AlbumEditorFieldset } from "./styled/AlbumEditorFieldset";
import { AlbumEditorFieldsetTitle } from "./styled/AlbumEditorFieldsetTitle";
import { AlbumEditorAboutFieldsetBody } from "./styled/AlbumEditorFieldsetBody";

import { AlbumTrackEditor } from "./nested/AlbumTrackEditor";
import { AlbumCoverEditor } from "./nested/AlbumCoverEditor";
import { AlbumAudioEditor } from "./nested/AlbumAudioEditor";

type TProps = {|
  data: TFormAlbum,
  onDataChange(data: TFormAlbum): void,
  onSubmit(): void,
  onCancel(): void
|};

export const AlbumEditorView = (props: TProps) => {
  const { data, onDataChange, onSubmit, onCancel } = props;

  const handleInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    onDataChange({
      ...data,
      [name]: value
    });
  };

  const handleTracklistChange = React.useCallback(
    tracklist => {
      onDataChange({
        ...data,
        tracklist
      });
    },
    [onDataChange, data]
  );

  const handleCoverChange = nextCover => {
    onDataChange({
      ...data,
      cover: nextCover
    });
  };

  const trackInputsNode = React.useMemo(
    () =>
      data.tracklist.map((track, trackIndex, tracklist) => (
        <AlbumTrackEditor
          onChange={handleTracklistChange}
          track={track}
          trackIndex={trackIndex}
          tracklist={tracklist}
        />
      )),
    [data.tracklist, handleTracklistChange]
  );

  return (
    <AlbumEditorWrapper onSubmit={onSubmit}>
      <AlbumCoverEditor value={data.cover} onChange={handleCoverChange} />
      <AlbumEditorFieldset>
        <AlbumEditorFieldsetTitle text="About" />
        <AlbumEditorAboutFieldsetBody withPadding>
          <FloatingLabelInput
            name="title"
            value={data.title}
            placeholder="Album title"
            onChange={handleInputChange}
          />
        </AlbumEditorAboutFieldsetBody>
      </AlbumEditorFieldset>
      <AlbumEditorFieldset>
        <AlbumEditorFieldsetTitle text="Tracklist" />
        <AlbumEditorAboutFieldsetBody>
          {trackInputsNode}
        </AlbumEditorAboutFieldsetBody>
        <AlbumAudioEditor data={data} onDataChange={onDataChange} />
      </AlbumEditorFieldset>
      <AlbumEditorFooter>
        <AlbumEditorButton isPrimary onClick={onSubmit}>
          share
        </AlbumEditorButton>
        <AlbumEditorButton onClick={onCancel}>cancel</AlbumEditorButton>
      </AlbumEditorFooter>
    </AlbumEditorWrapper>
  );
};
