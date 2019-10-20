import { getArrayFactory } from "util/getArrayFactory";

export const getImageFileMock = (): File => {
  const imageFileMock = new File(["(⌐□_□)"], "cover.png", {
    type: "image/png"
  });

  return imageFileMock;
};

export const getImageFileMocks = getArrayFactory(getImageFileMock);
