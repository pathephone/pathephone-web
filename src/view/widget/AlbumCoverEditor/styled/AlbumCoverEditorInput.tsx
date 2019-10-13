import * as React from "react";

import styles from "./AlbumCoverEditor.module.css";

type TProps = {
  errorMessage?: string;
  onFileChange(file: File): void;
};

export const AlbumCoverEditorInput = ({
  onFileChange,
  errorMessage = ""
}: TProps) => {
  const inputNodeRef = React.useRef<null | HTMLInputElement>(null);

  const onChange = React.useCallback(
    (event: React.SyntheticEvent<HTMLInputElement>) => {
      const { files } = event.currentTarget;
      if (files instanceof FileList) {
        onFileChange(files[0]);
        event.currentTarget.value = "";
      }
    },
    [onFileChange]
  );

  React.useEffect(() => {
    const inputNode = inputNodeRef.current;
    if (inputNode) {
      inputNode.setCustomValidity(errorMessage);
    }
  }, [errorMessage]);

  return (
    <input
      ref={inputNodeRef}
      className={styles.AlbumCoverEditor__Input}
      type="file"
      name="cover"
      onChange={onChange}
    />
  );
};
