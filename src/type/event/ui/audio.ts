type Paused = {
  type: "AUDIO__PAUSED";
};

type Played = {
  type: "AUDIO__PLAYING";
};

type Waiting = {
  type: "AUDIO__WAITING";
};

type Ended = {
  type: "AUDIO__ENDED";
};

type Failed = {
  type: "AUDIO__FAILED";
  payload: null | MediaError;
};

export type AudioEvent = Paused | Played | Waiting | Ended | Failed;
