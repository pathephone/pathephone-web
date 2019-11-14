import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { getAllByTestId, getByTestId } from "@testing-library/dom";

import { testId } from "util/testId";
import { AlbumCandidate, TrackCandidate, ArtistCandidate } from "type/model";
import { MissingAudioFilesError } from "util/error";
import { getUIDString } from "util/uid";
import { TestingProvider } from "util/react/TestingProvider";
import { getAudioFileMock } from "util/mock/audioFileMock";
import { getImageFileMock } from "util/mock/imageFileMock";

import { ShareAlbumPage } from "./ShareAlbumPage";
import { patchShareAlbumPageState } from "util/patchShareAlbumPageState";
import { getAppStateMock } from "util/mock/appStateMock";
import { EventBoundary } from "util/react/EventBoundary";
import { AppEvent } from "type/event";

const createObjectURLOrig = window.URL.createObjectURL;
const revokeObjectURLOrig = window.URL.revokeObjectURL;

beforeAll(() => {
  // @ts-ignore
  window.URL.createObjectURL = () => {};

  window.URL.revokeObjectURL = () => {};
});

afterAll(() => {
  window.URL.createObjectURL = createObjectURLOrig;

  window.URL.revokeObjectURL = revokeObjectURLOrig;
});

const getArtistCandidateMock = () => {
  const artistMock: ArtistCandidate = {
    id: getUIDString(),
    name: "artist name"
  };

  return artistMock;
};

const getTrackCandidateMock = () => {
  const trackMock: TrackCandidate = {
    artists: [getArtistCandidateMock()],
    audio: getAudioFileMock(),
    id: getUIDString(),
    title: "title"
  };

  return trackMock;
};

const getAlbumCandidateMock = () => {
  const dataMock: AlbumCandidate = {
    cover: getImageFileMock(),
    title: "title",
    tracklist: [getTrackCandidateMock()]
  };

  return dataMock;
};

type TParams = {
  simulateMissingAudioFilesError?: boolean;
  simulateNoCover?: boolean;
  simulateFilesSelected?: boolean;
  simulateAlbumCandidateRecieved?: boolean;
  albumFormDataMock?: AlbumCandidate;
  albumFormTrackMock?: TrackCandidate;
};

const renderComponent = (params?: TParams) => {
  const {
    simulateMissingAudioFilesError = false,
    simulateNoCover = false,
    simulateFilesSelected = false,
    simulateAlbumCandidateRecieved = false,
    albumFormDataMock = getAlbumCandidateMock(),
    albumFormTrackMock = getTrackCandidateMock()
  } = params || {};

  const appState = getAppStateMock();

  if (simulateFilesSelected) {
    appState.shareAlbumPageState = patchShareAlbumPageState(
      appState.shareAlbumPageState
    )
      .setFiles([getAudioFileMock()])
      .done();
  }

  if (simulateAlbumCandidateRecieved) {
    appState.shareAlbumPageState = patchShareAlbumPageState(
      appState.shareAlbumPageState
    )
      .setAlbumFormData(albumFormDataMock)
      .done();
  }

  if (simulateMissingAudioFilesError) {
    appState.shareAlbumPageState = patchShareAlbumPageState(
      appState.shareAlbumPageState
    )
      .setError(new MissingAudioFilesError())
      .done();
  }

  const eventHandler = jest.fn();

  const mounted = render(
    <EventBoundary handler={eventHandler}>
      <TestingProvider appState={appState}>
        <ShareAlbumPage />
      </TestingProvider>
    </EventBoundary>
  );

  const getDropZoneInputNode = () => {
    const inputNode = mounted.getByTestId(
      testId.SHARE_ALBUM_PAGE__DROP_ZONE_INPUT
    );

    if (inputNode instanceof HTMLInputElement) {
      return inputNode;
    }

    throw new TypeError("Input node is not an instance of HTMLInputElement");
  };

  const getLoaderNode = () =>
    mounted.getByTestId(testId.SHARE_ALBUM_PAGE__LOADER);

  const getAlbumEditorNode = () =>
    mounted.getByTestId(testId.SHARE_ALBUM_PAGE__ALBUM_EDITOR);

  const getDropZoneTextNode = () =>
    mounted.getByTestId(testId.SHARE_ALBUM_PAGE__DROP_ZONE_TEXT);

  const selectDropZoneFiles = () => {
    const dropZoneNode = getDropZoneInputNode();

    Object.defineProperty(dropZoneNode, "files", {
      value: []
    });

    fireEvent.change(dropZoneNode);
  };

  const getDropZoneTextMessage = () => getDropZoneTextNode().innerHTML;

  const getAlbumTitleInputNode = () =>
    mounted.getByTestId(testId.ALBUM_EDITOR__TITLE_INPUT);

  const getAlbumTitleInputValue = () => {
    const inputNode = getAlbumTitleInputNode();

    if (inputNode instanceof HTMLInputElement) {
      return inputNode.value;
    }

    throw new TypeError("Input node is not an instance of HTMLInputElement");
  };

  const changeAlbumTitleInputValue = (nextValue: string) => {
    fireEvent.change(getAlbumTitleInputNode(), {
      target: { value: nextValue }
    });
  };

  const getAlbumTrackEditors = () =>
    mounted.getAllByTestId(testId.ALBUM_TRACK_EDITOR__WRAPPER);

  const getAlbumTrackEditor = (trackIndex: number) =>
    getAlbumTrackEditors()[trackIndex];

  const getAlbumTrackEditorsCount = () => getAlbumTrackEditors().length;

  const getAlbumTrackTitleInputs = () =>
    mounted.getAllByTestId(testId.ALBUM_TRACK_EDITOR__TITLE_INPUT);

  const getAlbumTrackTitleInputValue = (index: number) => {
    const input = getAlbumTrackTitleInputs()[index];

    if (input instanceof HTMLInputElement) {
      return input.value;
    }

    throw new TypeError("Input node is not an instance of HTMLInputElement");
  };

  const getAlbumArtistNameInputs = (trackIndex: number): HTMLElement[] => {
    const editor = getAlbumTrackEditors()[trackIndex];

    const artistNameInputs = getAllByTestId(
      editor,
      testId.ALBUM_ARTIST_EDITOR__ARTIST_NAME_INPUT
    );

    return artistNameInputs;
  };

  const getAlbumArtistNameInputsCount = (trackIndex: number) =>
    getAlbumArtistNameInputs(trackIndex).length;

  const getAlbumArtistNameInputValue = ({
    trackIndex,
    artistIndex
  }: {
    trackIndex: number;
    artistIndex: number;
  }) => {
    const artistNameInput = getAlbumArtistNameInputs(trackIndex)[artistIndex];

    if (artistNameInput instanceof HTMLInputElement) {
      return artistNameInput.value;
    }

    throw new TypeError();
  };

  const setAlbumArtistNameInputValue = ({
    trackIndex,
    artistIndex,
    value
  }: {
    trackIndex: number;
    artistIndex: number;
    value: string;
  }) => {
    const artistNameInput = getAlbumArtistNameInputs(trackIndex)[artistIndex];

    fireEvent.change(artistNameInput, { target: { value } });
  };

  const getAlbumArtistNameValidation = ({
    trackIndex,
    artistIndex
  }: {
    trackIndex: number;
    artistIndex: number;
  }) => {
    const trackEditorNode = getAlbumTrackEditor(trackIndex);

    const validationNode = getAllByTestId(
      trackEditorNode,
      testId.ALBUM_ARTIST_EDITOR__ARTIST_NAME_VALIDATION
    )[artistIndex];

    if (validationNode instanceof HTMLElement) {
      return validationNode.innerHTML;
    }

    throw new TypeError("Validation node is not an instance of HTMLElement.");
  };

  const setAlbumTrackTitleInputValue = ({
    trackIndex,
    value
  }: {
    trackIndex: number;
    value: string;
  }) => {
    const trackTitleInput = getAlbumTrackTitleInputs()[trackIndex];

    fireEvent.change(trackTitleInput, { target: { value } });
  };

  const getAlbumTrackTitleValidation = (trackIndex: number) => {
    const trackEditorNode = getAlbumTrackEditor(trackIndex);

    const validationNode = getByTestId(
      trackEditorNode,
      testId.ALBUM_TRACK_EDITOR__TITLE_VALIDATION
    );

    if (validationNode instanceof HTMLElement) {
      return validationNode.innerHTML;
    }

    throw new TypeError("Validation node is not an instance of HTMLElement.");
  };

  const getAlbumTracklistValidation = () => {
    const validationNode = mounted.getByTestId(
      testId.ALBUM_TRACKLIST__VALIDATION
    );

    return validationNode.innerHTML;
  };

  const getRemoveTrackButton = (trackIndex: number) => {
    const editorNode = getAlbumTrackEditor(trackIndex);

    const buttonNode = getByTestId(
      editorNode,
      testId.ALBUM_TRACK_EDITOR__REMOVE_BUTTON
    );

    return buttonNode;
  };

  const getSubmitButtonNode = () =>
    mounted.getByTestId(testId.ALBUM_EDITOR__SUBMIT_BUTTON);

  const getCancelButtonNode = () =>
    mounted.getByTestId(testId.ALBUM_EDITOR__CANCEL_BUTTON);

  const getEventHandler = () => eventHandler;

  const removeTrack = (trackIdex: number) => {
    const buttonNode = getRemoveTrackButton(trackIdex);

    fireEvent.click(buttonNode);
  };

  const clickSubmitButton = () => {
    const buttonNode = getSubmitButtonNode();

    fireEvent.click(buttonNode);
  };

  const clickCancelButton = () => {
    const buttonNode = getCancelButtonNode();

    fireEvent.click(buttonNode);
  };

  return {
    getDropZoneInputNode,
    getLoaderNode,
    getAlbumEditorNode,
    getDropZoneTextMessage,
    selectDropZoneFiles,
    changeAlbumTitleInputValue,
    getAlbumTitleInputValue,
    getAlbumTrackEditorsCount,
    getAlbumTrackTitleInputs,
    getAlbumTrackTitleInputValue,
    getAlbumArtistNameInputValue,
    getAlbumArtistNameInputs,
    getAlbumArtistNameInputsCount,
    setAlbumArtistNameInputValue,
    getAlbumArtistNameValidation,
    setAlbumTrackTitleInputValue,
    getAlbumTrackTitleValidation,
    getAlbumTracklistValidation,
    getEventHandler,
    removeTrack,
    clickSubmitButton,
    clickCancelButton
  };
};

afterEach(cleanup);

describe("once no files was selected", () => {
  test("should NOT display loader", async () => {
    const { getLoaderNode } = renderComponent();

    expect(getLoaderNode).toThrow();
  });

  test("should NOT display album editor", async () => {
    const { getAlbumEditorNode } = renderComponent();

    expect(getAlbumEditorNode).toThrow();
  });

  test("should display drop-zone", async () => {
    const { getDropZoneInputNode } = renderComponent();

    expect(getDropZoneInputNode).not.toThrow();
  });
});

describe("once files selected", () => {
  test("should NOT display drop-zone", async () => {
    const { getDropZoneInputNode } = renderComponent({
      simulateFilesSelected: true
    });

    expect(getDropZoneInputNode).toThrow();
  });

  test("should NOT display album editor", async () => {
    const { getAlbumEditorNode } = renderComponent({
      simulateFilesSelected: true
    });

    expect(getAlbumEditorNode).toThrow();
  });
  test("should display loader", async () => {
    const { getLoaderNode } = renderComponent({
      simulateFilesSelected: true
    });

    expect(getLoaderNode).not.toThrow();
  });
});

describe("once album candidate recieved", () => {
  test("should NOT display drop-zone", async () => {
    const { getDropZoneInputNode } = renderComponent({
      simulateAlbumCandidateRecieved: true
    });

    expect(getDropZoneInputNode).toThrow();
  });

  test("should NOT display loader", async () => {
    const { getLoaderNode } = renderComponent({
      simulateAlbumCandidateRecieved: true
    });

    expect(getLoaderNode).toThrow();
  });

  test("should display album editor", async () => {
    const { getAlbumEditorNode } = renderComponent({
      simulateAlbumCandidateRecieved: true
    });

    expect(() => getAlbumEditorNode()).not.toThrow();
  });

  test("should set correct album title input value", async () => {
    const value = "album title";

    const { getAlbumTitleInputValue } = renderComponent({
      simulateAlbumCandidateRecieved: true,
      albumFormDataMock: {
        ...getAlbumCandidateMock(),
        title: value
      }
    });

    expect(getAlbumTitleInputValue()).toEqual(value);
  });

  test("number of track editors should match", async () => {
    const tracklist = [getTrackCandidateMock(), getTrackCandidateMock()];

    const { getAlbumTrackEditorsCount } = renderComponent({
      simulateAlbumCandidateRecieved: true,
      albumFormDataMock: {
        ...getAlbumCandidateMock(),
        tracklist
      }
    });

    expect(getAlbumTrackEditorsCount()).toEqual(tracklist.length);
  });

  test("correct track titles should be set", async () => {
    const tracklist = [
      {
        ...getTrackCandidateMock(),
        title: "track 1"
      },
      {
        ...getTrackCandidateMock(),
        title: "track 2"
      }
    ];

    const { getAlbumTrackTitleInputValue } = renderComponent({
      simulateAlbumCandidateRecieved: true,
      albumFormDataMock: {
        ...getAlbumCandidateMock(),
        tracklist
      }
    });

    tracklist.forEach((track, index) => {
      expect(getAlbumTrackTitleInputValue(index)).toEqual(track.title);
    });
  });

  test("number of track artist name inputs should match", async () => {
    const albumFormDataMock = getAlbumCandidateMock();

    const { getAlbumArtistNameInputsCount } = renderComponent({
      simulateAlbumCandidateRecieved: true,
      albumFormDataMock
    });

    albumFormDataMock.tracklist.forEach((track, trackIndex) => {
      expect(getAlbumArtistNameInputsCount(trackIndex)).toEqual(
        track.artists.length
      );
    });
  });

  test("correct track artist name should be set", async () => {
    const albumFormDataMock = getAlbumCandidateMock();

    const { getAlbumArtistNameInputValue } = renderComponent({
      simulateAlbumCandidateRecieved: true,
      albumFormDataMock
    });

    albumFormDataMock.tracklist.forEach((track, trackIndex) => {
      track.artists.forEach((artist, artistIndex) => {
        expect(
          getAlbumArtistNameInputValue({ trackIndex, artistIndex })
        ).toEqual(artist.name);
      });
    });
  });
});

describe("on no audio files selected error", () => {
  test("should set correct drop zone text message ", async () => {
    const { getDropZoneTextMessage } = renderComponent({
      simulateMissingAudioFilesError: true
    });

    expect(typeof getDropZoneTextMessage()).toEqual("string");
  });
});

describe("on album title change", () => {
  test("should dispatch correct event", async () => {
    const { changeAlbumTitleInputValue, getEventHandler } = renderComponent({
      simulateAlbumCandidateRecieved: true,
      albumFormDataMock: {
        ...getAlbumCandidateMock(),
        title: "initial value"
      }
    });

    const value = "next value";

    changeAlbumTitleInputValue(value);

    expect(getEventHandler()).toBeCalledWith({
      type: "ALBUM_EDITOR__TITLE_CHANGE",
      payload: value
    });
  });
});

describe("on artist name input change", () => {
  test("should dispatch correct event", async () => {
    const artistCandidateMock = getArtistCandidateMock();

    const trackCandidateMock = {
      ...getTrackCandidateMock(),
      artists: [artistCandidateMock]
    };

    const albumFormDataMock = {
      ...getAlbumCandidateMock(),
      tracklist: [trackCandidateMock]
    };

    const { setAlbumArtistNameInputValue, getEventHandler } = renderComponent({
      simulateAlbumCandidateRecieved: true,
      albumFormDataMock
    });

    const nextValue = "next value";

    setAlbumArtistNameInputValue({
      trackIndex: 0,
      artistIndex: 0,
      value: nextValue
    });

    expect(getEventHandler()).toBeCalledWith({
      type: "ALBUM_TRACK_EDITOR__ARTIST_CHANGE",
      payload: {
        trackId: trackCandidateMock.id,
        artistId: artistCandidateMock.id,
        value: nextValue
      }
    } as AppEvent);
  });
});

describe("on remove track", () => {
  test("should dispatch correct event", async () => {
    const trackCandidateMock = getTrackCandidateMock();

    const albumFormDataMock = {
      ...getAlbumCandidateMock(),
      tracklist: [trackCandidateMock]
    };

    const { getEventHandler, removeTrack } = renderComponent({
      simulateAlbumCandidateRecieved: true,
      albumFormDataMock
    });

    removeTrack(0);

    expect(getEventHandler()).toBeCalledWith({
      type: "ALBUM_TRACK_EDITOR__REMOVE",
      payload: trackCandidateMock.id
    } as AppEvent);
  });
});

describe("on form cancel", () => {
  test("should dispatch correct event", async () => {
    const { clickCancelButton, getEventHandler } = renderComponent({
      simulateAlbumCandidateRecieved: true
    });

    clickCancelButton();

    expect(getEventHandler()).toBeCalledWith({
      type: "ALBUM_EDITOR__CANCEL"
    } as AppEvent);
  });
});

describe("on form submit", () => {
  test("should dispatch correct event", async () => {
    const { clickSubmitButton, getEventHandler } = renderComponent({
      simulateAlbumCandidateRecieved: true
    });

    clickSubmitButton();

    expect(getEventHandler()).toBeCalledWith({
      type: "ALBUM_EDITOR__SUBMIT"
    } as AppEvent);
  });
});
