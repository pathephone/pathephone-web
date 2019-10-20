import { CustomFile } from "service/mock/type";

const audioPrefix = "audio/";

export const filterAudioFiles = (files: CustomFile[]): CustomFile[] => {
  return files.filter(({ fileType, file }) => {
    if (fileType) {
      return fileType.mime.startsWith(audioPrefix);
    }
    return file.type.startsWith(audioPrefix);
  });
};
