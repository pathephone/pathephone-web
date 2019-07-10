// @flow strict

import type { TFeedAlbum } from "types/state";

import React from "react";

import { AlbumCover } from "view/AlbumCover";

import { useAddAlbumToPlaylist } from "./utils/useAddAlbumToPlaylist";
import { usePlayAlbum } from "./utils/usePlayAlbum";
import { useDeleteSearchResult } from "./utils/useDeleteSearchResult";
import { useSaveAlbumToLibrary } from "./utils/useSaveAlbumToLibrary";
import { SearchQueryAlbumInfo } from "./styled/SearchQueryAlbumInfo";
import { SearchQueryAlbumRoot } from "./styled/SearchQueryAlbumRoot";
import { SearchQueryAlbumGroup } from "./styled/SearchQueryAlbumGroup";
import { SearchQueryAlbumDelete } from "./styled/SearchQueryAlbumDelete";
import { SearchQueryAlbumSave } from "./styled/SearchQueryAlbumSave";

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
    <SearchQueryAlbumRoot>
      <AlbumCover
        imageSrc={coverSrc}
        onAddToPlaylist={onAddToPlaylist}
        onPlay={onPlay}
      />
      <SearchQueryAlbumGroup>
        <SearchQueryAlbumDelete onClick={onDeleteButtonClick} />
        <SearchQueryAlbumInfo title={title} artist={artist} />
        <SearchQueryAlbumSave
          hidden={!hasSaveToLibraryButton}
          text={saveToLibraryButtonText}
          onClick={onSaveToLibraryButtonClick}
        />
      </SearchQueryAlbumGroup>
    </SearchQueryAlbumRoot>
  );
};
