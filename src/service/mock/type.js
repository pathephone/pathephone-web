// @flow strict

export type FileType = {|
  ext: string,
  mime: string
|};

export type CustomFile = {
  fileType: void | FileType,
  file: File
};
