import { TIntlDictionary } from "type/state";

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
  searchAlbumsPage: {
    subTitleText: "Поиск продолжается, пока открыта страница",
    fallbackSubTitleText: "Произошла ошибка, попробуйте еще раз",
    newResultsButtonText: "Показать новые результаты",
    fallbackButtonText: "Попробовать еще раз"
  },
  shareAlbumPage: {
    didSucceedText: "Альбом успешно опубликован"
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
