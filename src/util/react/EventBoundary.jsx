// @flow strict
import type { TEvent } from "type/event";

import { createEventBoundary } from "react-event-boundary";

import { DispatchContext } from "context/DispatchContext";

export const EventBoundary = createEventBoundary<TEvent>(DispatchContext);
