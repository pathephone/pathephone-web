import { CustomFile } from "service/mock/type";

import fileType from "file-type";

import { UnexpectedError } from "util/error";

export const getCustomFileFromFile = async (
  file: File
): Promise<CustomFile> => {
  const buffer = await new Promise<ArrayBuffer>((resolve, reject) => {
    const magicBlob = file.slice(0, fileType.minimumBytes);

    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      if (fileReader.result instanceof ArrayBuffer) {
        resolve(fileReader.result);
      } else {
        reject(new UnexpectedError());
      }
    };

    fileReader.onerror = () => reject(new UnexpectedError());

    fileReader.readAsArrayBuffer(magicBlob);
  });

  const fileTypeResult = fileType(new Uint8Array(buffer));

  return { fileType: fileTypeResult, file };
};
