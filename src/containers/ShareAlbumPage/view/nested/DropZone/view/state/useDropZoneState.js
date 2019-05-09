// @flow strict

type TProps = {|
  onFilesRecieved(data: FileList): void,
  errorText?: string,
  successText?: string
|};

export type TDropZoneProps = TProps;

export const useDropZoneState = (props: TProps) => {
  const { onFilesRecieved, errorText, successText } = props;

  const onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    onFilesRecieved(files);
    e.currentTarget.value = "";
  };

  const mainText = "Click to select album files or drag’n’drop files here";

  return {
    errorText,
    successText,
    onChange,
    mainText
  };
};
