// CUSTOM TYPE ERRORS

export class StrictHookError extends TypeError {
  message = "Strict hook error.";
}

export class UnreachableError extends TypeError {
  message = "Unreachable error.";
}

export class RouterParamsError extends TypeError {
  message = "Router params error.";
}

// CUSTOM ERRORS

export class MissingAudioFilesError extends Error {
  message = "No audio files selected.";
}

export class UnexpectedError extends Error {
  message = "Unexpected error.";
}
