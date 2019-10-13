import React from "react";

export const useFileURL = (file: null | File) => {
  const fileURL = React.useMemo(() => {
    if (file) {
      return URL.createObjectURL(file);
    }
    return null;
  }, [file]);

  React.useEffect(() => {
    if (fileURL !== null) {
      return () => {
        URL.revokeObjectURL(fileURL);
      };
    }
  }, [fileURL]);

  return fileURL;
};
