// @flow strict

import type { TFeedAlbum } from "types/state";

import React from "react";

import { AlbumCover } from "components/AlbumCover";
import { ClearIcon } from "icons/round-clear";

import { SearchQueryAlbumWrapper } from "./styled/SearchQueryAlbumWrapper";
import { SearchQueryAlbumButton } from "./styled/SearchQueryAlbumButton";
import { SearchQueryAlbumInfo } from "./styled/SearchQueryAlbumInfo";
import { useAddAlbumToPlaylist } from "./utils/useAddAlbumToPlaylist";
import { usePlayAlbum } from "./utils/usePlayAlbum";
import { useDeleteSearchResult } from "./utils/useDeleteSearchResult";
import { useSaveAlbumToLibrary } from "./utils/useSaveAlbumToLibrary";

type TProps = {|
  info: TFeedAlbum
|};

export const SearchQueryAlbum = (props: TProps) => {
  const { info } = props;

  const coverSrc = info.coverSrc;

  const title = info.title;

  const artist = info.artistName;

  const hasSaveToLibraryButton = !info.saved;

  const saveToLibraryButtonText = "save to library";

  const onAddToPlaylist = useAddAlbumToPlaylist(info.id);

  const onPlay = usePlayAlbum(info.id);

  const onDeleteButtonClick = useDeleteSearchResult(info.id);

  const onSaveToLibraryButtonClick = useSaveAlbumToLibrary(info.id);

  return (
    <SearchQueryAlbumWrapper mod="root">
      <AlbumCover
        imageSrc={coverSrc}
        onAddToPlaylist={onAddToPlaylist}
        onPlay={onPlay}
      />
      <SearchQueryAlbumWrapper mod="group">
        <SearchQueryAlbumButton mod="delete" onClick={onDeleteButtonClick}>
          <ClearIcon />
        </SearchQueryAlbumButton>
        <SearchQueryAlbumInfo title={title} artist={artist} />
        {hasSaveToLibraryButton && (
          <SearchQueryAlbumButton
            mod="save"
            onClick={onSaveToLibraryButtonClick}
          >
            {saveToLibraryButtonText}
          </SearchQueryAlbumButton>
        )}
      </SearchQueryAlbumWrapper>
    </SearchQueryAlbumWrapper>
  );
};
