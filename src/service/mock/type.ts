import { FileTypeResult } from "file-type";

export type CustomFile = {
  fileType: void | FileTypeResult;
  file: File;
};
