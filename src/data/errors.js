// @flow strict

export class StrictHookError extends Error {
  message = "Expected data is not available yet.";
}

export class UnreachableError extends TypeError {
  message = "Unreachable type error.";
}

export class MissingAudioFilesError extends Error {
  message = "No audio files selected.";
}
