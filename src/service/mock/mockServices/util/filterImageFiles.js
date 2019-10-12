// @flow strict

import type { CustomFile } from "service/mock/type";

const imagePrefix = "image/";

export const filterImageFiles = (files: CustomFile[]): CustomFile[] => {
  return files.filter(({ fileType, file }) => {
    if (fileType) {
      return fileType.mime.startsWith(imagePrefix);
    }
    return file.type.startsWith(imagePrefix);
  });
};
