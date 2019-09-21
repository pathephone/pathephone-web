// @flow strict

import type { TIntlDictionary } from "types/state";

const intlDictionaryRu: TIntlDictionary = {
  playerNavigation: {
    latestAlbumsLinkText: "Последние альбомы",
    searchAlbumsLinkText: "Искать альбомы",
    shareAlbumLinkText: "Загрузить альбом"
  },
  latestAlbumsPage: {
    loadMoreButtonText: "Дальше",
    fallbackText: "Пока нет альбомов"
  },
  searchQueriesPage: {
    loadMoreButtonText: "Дальше",
    fallbackText: "Пока нет поисковых запросов"
  },
  searchQueryItem: {
    resultsCountText: "Альбомов найдено",
    noResultsText: "Пока ничего не найдено"
  },
  searchQueryPage: {
    fallbackText: "Идет поиск...",
    saveSearchButtonText: "Сохранить поиск",
    deleteSearchButtonText: "Удалить поиск",
    showNewResultsButtonText: "Показать новые результаты"
  },
  albumEditor: {
    aboutFieldsetTitleText: "Общая информация",
    tracklistFieldsetTitleText: "Список композиций",
    albumTitleInputPlaceholderText: "Название альбома",
    submitButtonText: "Опубликовать",
    cancelButtonText: "Отменить"
  },
  albumAudioEditor: {
    missingAudioValidationText: "Требуется как минимум одна композиция",
    labelText: "Добавить композиции"
  },
  albumCoverEditor: {
    missingCoverValidationText: "Необходимо заполнить"
  },
  dropZone: {
    mainText:
      "Нажмите сюда, чтобы выбрать файлы альбома, либо перетащите их в эту область"
  },
  albumTrackEditor: {
    titleInputPlaceholderText: "Название композиции",
    missingTitleValidationText: "Необходимо заполнить",
    missingArtistNameValidationText: "Необходимо заполнить",
    artistNameInputPlaceholderText(trackNumber: number) {
      return `Артист #${trackNumber}`;
    }
  }
};

export { intlDictionaryRu as dictionary };
