import * as React from "react";

import styles from "./AlbumAudioEditor.module.css";

type TProps = {
  onFilesChange(files: FileList): void;
  validationMessage?: string;
  testId: string;
};

export const AlbumAudioEditorInput = ({
  onFilesChange,
  validationMessage = ""
}: TProps) => {
  const inputNodeRef = React.useRef<null | HTMLInputElement>(null);

  const onChange = React.useCallback(
    (event: React.SyntheticEvent<HTMLInputElement>) => {
      const { files } = event.currentTarget;
      if (files) {
        onFilesChange(files);
      }
    },
    [onFilesChange]
  );

  React.useEffect(() => {
    const { current: inputNode } = inputNodeRef;
    if (inputNode) {
      inputNode.setCustomValidity(validationMessage);
    }
  }, [validationMessage]);

  return (
    <input
      ref={inputNodeRef}
      className={styles.AlbumAudioEditor__Input}
      type="file"
      name="tracks"
      onChange={onChange}
    />
  );
};
