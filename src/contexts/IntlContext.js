// @flow strict

import type { TIntl } from "types/state";

import * as React from "react";

import { defaultIntl } from "data/defaultIntl";

export const IntlContext = React.createContext<TIntl>(defaultIntl);
