import React from "react";
import {
  waitForDomChange,
  render,
  fireEvent,
  cleanup
} from "@testing-library/react";
import { getAllByTestId, getByTestId, wait } from "@testing-library/dom";

import { testId } from "util/testId";
import { TAlbumFormData, TAlbumFormTrack, TAlbumFormArtist } from "type/state";
import { mockService } from "service/mock/index";
import { MissingAudioFilesError } from "util/error";
import { getUIDString } from "util/uid";
import { TestingProvider } from "util/react/TestingProvider";

import { ShareAlbumPage } from "./ShareAlbumPage";
import { Service } from "type/service";

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

const getAudioFileMock = (): File => {
  const audioFileMock = new File(["(⌐□_□)"], "track.ogg", {
    type: "audio/ogg"
  });

  return audioFileMock;
};

const getImageFileMock = (): File => {
  const imageFileMock = new File(["(⌐□_□)"], "cover.png", {
    type: "image/png"
  });

  return imageFileMock;
};

const getAlbumFormArtistMock = () => {
  const artistMock: TAlbumFormArtist = {
    id: getUIDString(),
    name: "artist name"
  };

  return artistMock;
};

const getAlbumFormTrackMock = () => {
  const trackMock: TAlbumFormTrack = {
    artists: [getAlbumFormArtistMock()],
    audio: getAudioFileMock(),
    id: getUIDString(),
    title: "title"
  };

  return trackMock;
};

const getAlbumFormDataMock = () => {
  const dataMock: TAlbumFormData = {
    cover: getImageFileMock(),
    title: "title",
    tracklist: [getAlbumFormTrackMock()]
  };

  return dataMock;
};

type TParams = {
  simulateMissingAudioFilesError?: boolean;
  simulateNoCover?: boolean;
  albumFormDataMock?: TAlbumFormData;
  albumFormTrackMock?: TAlbumFormTrack;
};

const renderComponent = (params?: TParams) => {
  const {
    simulateMissingAudioFilesError = false,
    simulateNoCover = false,
    albumFormDataMock = getAlbumFormDataMock(),
    albumFormTrackMock = getAlbumFormTrackMock()
  } = params || {};

  const service: Service = {
    ...mockService,
    getAlbumFormDataFromFiles: jest.fn().mockImplementation(async () => {
      if (simulateMissingAudioFilesError) {
        throw new MissingAudioFilesError();
      }
      if (simulateNoCover) {
        return {
          ...albumFormDataMock,
          cover: null
        };
      }
      return albumFormDataMock;
    }),
    getTrackFormDataFromFile: jest.fn().mockResolvedValue(albumFormTrackMock)
  };

  const mounted = render(
    <TestingProvider service={service}>
      <ShareAlbumPage />
    </TestingProvider>
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
    removeTrack,
    clickSubmitButton,
    clickCancelButton
  };
};

afterEach(cleanup);

test("should display drop-zone by default", async () => {
  const { getDropZoneInputNode } = renderComponent();

  expect(() => getDropZoneInputNode()).not.toThrow();

  await wait();
});

describe("on correct filelist selected", () => {
  test("drop-zone should disappear", async () => {
    const { getDropZoneInputNode, selectDropZoneFiles } = renderComponent();

    selectDropZoneFiles();

    expect(() => getDropZoneInputNode()).toThrow();

    await wait();
  });

  test("loader should appear", async () => {
    const { getLoaderNode, selectDropZoneFiles } = renderComponent();

    selectDropZoneFiles();

    expect(() => getLoaderNode()).not.toThrow();

    await wait();
  });

  test("loader should disappear on next render", async () => {
    const { getLoaderNode, selectDropZoneFiles } = renderComponent();

    selectDropZoneFiles();

    await waitForDomChange();

    expect(() => getLoaderNode()).toThrow();

    await wait();
  });

  test("album editor should appear on next render", async () => {
    const { getAlbumEditorNode, selectDropZoneFiles } = renderComponent();

    selectDropZoneFiles();

    await waitForDomChange();

    expect(() => getAlbumEditorNode()).not.toThrow();

    await wait();
  });

  test("correct album title should be set", async () => {
    const value = "album title";

    const { getAlbumTitleInputValue, selectDropZoneFiles } = renderComponent({
      albumFormDataMock: {
        ...getAlbumFormDataMock(),
        title: value
      }
    });

    selectDropZoneFiles();

    await waitForDomChange();

    expect(getAlbumTitleInputValue()).toEqual(value);

    await wait();
  });

  test("number of track editors should match", async () => {
    const tracklist = [getAlbumFormTrackMock(), getAlbumFormTrackMock()];

    const { getAlbumTrackEditorsCount, selectDropZoneFiles } = renderComponent({
      albumFormDataMock: {
        ...getAlbumFormDataMock(),
        tracklist
      }
    });

    selectDropZoneFiles();

    await waitForDomChange();

    expect(getAlbumTrackEditorsCount()).toEqual(tracklist.length);

    await wait();
  });

  test("correct track titles should be set", async () => {
    const tracklist = [
      {
        ...getAlbumFormTrackMock(),
        title: "track 1"
      },
      {
        ...getAlbumFormTrackMock(),
        title: "track 2"
      }
    ];

    const {
      getAlbumTrackTitleInputValue,
      selectDropZoneFiles
    } = renderComponent({
      albumFormDataMock: {
        ...getAlbumFormDataMock(),
        tracklist
      }
    });

    selectDropZoneFiles();

    await waitForDomChange();

    tracklist.forEach((track, index) => {
      expect(getAlbumTrackTitleInputValue(index)).toEqual(track.title);
    });

    await wait();
  });

  test("number of track artist name inputs should match", async () => {
    const albumFormDataMock = getAlbumFormDataMock();

    const {
      getAlbumArtistNameInputsCount,
      selectDropZoneFiles
    } = renderComponent({
      albumFormDataMock
    });

    selectDropZoneFiles();

    await waitForDomChange();

    albumFormDataMock.tracklist.forEach((track, trackIndex) => {
      expect(getAlbumArtistNameInputsCount(trackIndex)).toEqual(
        track.artists.length + 1
      );
    });

    await wait();
  });

  test("correct track artist name should be set", async () => {
    const albumFormDataMock = getAlbumFormDataMock();

    const {
      getAlbumArtistNameInputValue,
      selectDropZoneFiles
    } = renderComponent({
      albumFormDataMock
    });

    selectDropZoneFiles();

    await waitForDomChange();

    albumFormDataMock.tracklist.forEach((track, trackIndex) => {
      track.artists.forEach((artist, artistIndex) => {
        expect(
          getAlbumArtistNameInputValue({ trackIndex, artistIndex })
        ).toEqual(artist.name);
      });
    });

    await wait();
  });

  test("each track editor should have empty artist name input", async () => {
    const albumFormDataMock = getAlbumFormDataMock();

    const {
      getAlbumArtistNameInputValue,
      selectDropZoneFiles
    } = renderComponent({
      albumFormDataMock
    });

    selectDropZoneFiles();

    await waitForDomChange();

    albumFormDataMock.tracklist.forEach((track, trackIndex) => {
      const lastArtistIndex = track.artists.length - 1;

      const emptyArtistNameInputIndex = lastArtistIndex + 1;

      expect(
        getAlbumArtistNameInputValue({
          trackIndex,
          artistIndex: emptyArtistNameInputIndex
        })
      ).toEqual("");
    });

    await wait();
  });
});

describe("on no audio files selected", () => {
  test("correct drop zone text message should appear", async () => {
    const { getDropZoneTextMessage, selectDropZoneFiles } = renderComponent({
      simulateMissingAudioFilesError: true
    });

    selectDropZoneFiles();

    await waitForDomChange();

    expect(typeof getDropZoneTextMessage()).toEqual("string");

    await wait();
  });
});

describe("on album title change", () => {
  test("input value should change", async () => {
    const {
      selectDropZoneFiles,
      changeAlbumTitleInputValue,
      getAlbumTitleInputValue
    } = renderComponent({
      albumFormDataMock: {
        ...getAlbumFormDataMock(),
        title: "initial value"
      }
    });

    selectDropZoneFiles();

    await waitForDomChange();

    const value = "next value";

    changeAlbumTitleInputValue(value);

    expect(getAlbumTitleInputValue()).toEqual(value);

    await wait();
  });
});

describe("on empty artist name input change", () => {
  test("new empty artist name should appear", async () => {
    const albumFormDataMock = {
      ...getAlbumFormDataMock(),
      tracklist: [
        {
          ...getAlbumFormTrackMock(),
          artists: [getAlbumFormArtistMock()]
        }
      ]
    };

    const {
      setAlbumArtistNameInputValue,
      getAlbumArtistNameInputsCount,
      selectDropZoneFiles
    } = renderComponent({
      albumFormDataMock
    });

    selectDropZoneFiles();

    await waitForDomChange();

    const trackIndex = 0;

    setAlbumArtistNameInputValue({
      trackIndex,
      artistIndex: 1,
      value: "next value"
    });

    const expectedArtistNameInputsCount = 3;

    expect(getAlbumArtistNameInputsCount(trackIndex)).toEqual(
      expectedArtistNameInputsCount
    );

    await wait();
  });
});

describe("on track title input get cleared", () => {
  test("validation message should appear", async () => {
    const albumFormDataMock = {
      ...getAlbumFormDataMock(),
      tracklist: [
        {
          ...getAlbumFormTrackMock(),
          artists: [getAlbumFormArtistMock()]
        }
      ]
    };

    const {
      setAlbumTrackTitleInputValue,
      getAlbumTrackTitleValidation,
      selectDropZoneFiles
    } = renderComponent({
      albumFormDataMock
    });

    selectDropZoneFiles();

    await waitForDomChange();

    setAlbumTrackTitleInputValue({
      trackIndex: 0,
      value: ""
    });

    expect(getAlbumTrackTitleValidation(0)).not.toEqual("");

    await wait();
  });
});

describe("on last empty artist name input get cleared", () => {
  test("validation message should appear", async () => {
    const albumFormDataMock = {
      ...getAlbumFormDataMock(),
      tracklist: [
        {
          ...getAlbumFormTrackMock(),
          artists: [getAlbumFormArtistMock()]
        }
      ]
    };

    const {
      setAlbumArtistNameInputValue,
      getAlbumArtistNameValidation,
      selectDropZoneFiles
    } = renderComponent({
      albumFormDataMock
    });

    selectDropZoneFiles();

    await waitForDomChange();

    setAlbumArtistNameInputValue({
      trackIndex: 0,
      artistIndex: 0,
      value: ""
    });

    expect(
      getAlbumArtistNameValidation({ trackIndex: 0, artistIndex: 0 })
    ).not.toEqual("");

    await wait();
  });
});

describe("on empty tracklist", () => {
  test("should show validation message", async () => {
    const albumFormDataMock = {
      ...getAlbumFormDataMock(),
      tracklist: []
    };

    const {
      getAlbumTracklistValidation,
      selectDropZoneFiles
    } = renderComponent({
      albumFormDataMock
    });

    selectDropZoneFiles();

    await waitForDomChange();

    expect(getAlbumTracklistValidation()).not.toEqual("");

    await wait();
  });
});

describe("on remove track", () => {
  test("track editors count should decrese", async () => {
    const albumFormDataMock = {
      ...getAlbumFormDataMock(),
      tracklist: [getAlbumFormTrackMock(), getAlbumFormTrackMock()]
    };

    const {
      getAlbumTrackEditorsCount,
      selectDropZoneFiles,
      removeTrack
    } = renderComponent({
      albumFormDataMock
    });

    selectDropZoneFiles();

    await waitForDomChange();

    removeTrack(0);

    expect(getAlbumTrackEditorsCount()).toEqual(1);

    await wait();
  });
});

describe("on form cancel", () => {
  test("should show drop zone again", async () => {
    const {
      selectDropZoneFiles,
      clickCancelButton,
      getDropZoneInputNode
    } = renderComponent();

    selectDropZoneFiles();

    await waitForDomChange();

    clickCancelButton();

    expect(getDropZoneInputNode).not.toThrow();
  });
});

describe("on valid form submit", () => {
  test("should show loader", async () => {
    const {
      selectDropZoneFiles,
      clickSubmitButton,
      getLoaderNode
    } = renderComponent();

    selectDropZoneFiles();

    await waitForDomChange();

    clickSubmitButton();

    expect(getLoaderNode).not.toThrow();

    await wait();
  });
});

describe("on second files select", () => {
  test("should show editor again", async () => {
    const {
      selectDropZoneFiles,
      clickSubmitButton,
      getAlbumEditorNode
    } = renderComponent();

    selectDropZoneFiles();

    await waitForDomChange();

    clickSubmitButton();

    await waitForDomChange();

    selectDropZoneFiles();

    await waitForDomChange();

    expect(getAlbumEditorNode).not.toThrow();
  });
});
