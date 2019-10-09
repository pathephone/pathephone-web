// @flow strict
import type { TEvent } from "types/event";

import { createEventBoundary } from "react-event-boundary";

import { DispatchContext } from "contexts/DispatchContext";

export const EventBoundary = createEventBoundary<TEvent>(DispatchContext);
