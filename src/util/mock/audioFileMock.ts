import { getArrayFactory } from "util/getArrayFactory";

export const getAudioFileMock = (): File => {
  const audioFileMock = new File(["(⌐□_□)"], "track.ogg", {
    type: "audio/ogg"
  });

  return audioFileMock;
};

export const getAudioFileMocks = getArrayFactory(getAudioFileMock);
