export const filterFilesToAudioFiles = (files: FileList): File[] =>
  [...files].filter(file => {
    return file.type === "audio/*";
  });

export const filterFilesToImageFiles = (files: FileList): File[] =>
  [...files].filter(file => {
    return file.type === "image/*";
  });
