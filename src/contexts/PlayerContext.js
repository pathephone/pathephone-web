// @flow strict

import type { TPlayer } from "types/state";

import * as React from "react";

export const PlayerContext = React.createContext<TPlayer | null>(null);
