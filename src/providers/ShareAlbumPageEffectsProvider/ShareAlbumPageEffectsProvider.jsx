// @flow strict

import type { TEvent } from "types/event";

import * as React from "react";

import { EventBoundary } from "view/EventBoundary";
import { useShareAlbumPageState } from "hooks/useShareAlbumPageState";

import { useSubmitAlbumService } from "./state/useSubmitAlbumService";
import { useProcessFilesService } from "./state/useProcessFilesService";

type TProps = {
  children: React.Node
};

export const ShareAlbumPageEffectsProvider = (props: TProps) => {
  const { children } = props;

  const { albumFormData } = useShareAlbumPageState();

  const submitAlbum = useSubmitAlbumService();

  const processFiles = useProcessFilesService();

  const handleEvent = React.useCallback(
    (event: TEvent) => {
      if (event.type === "ALBUM_EDITOR__SUBMIT" && albumFormData) {
        submitAlbum(albumFormData);
      }
      if (
        event.type === "DROP_ZONE__FILES_RECIEVED" ||
        event.type === "ALBUM_AUDIO_EDITOR__TRACKS_RECIEVED"
      ) {
        processFiles(event.payload);
      }
    },
    [albumFormData, processFiles, submitAlbum]
  );

  return <EventBoundary handler={handleEvent}>{children}</EventBoundary>;
};
