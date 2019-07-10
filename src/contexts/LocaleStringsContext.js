// @flow strict

import type { TIntl } from "types/state";

import * as React from "react";

export const LocaleStringsContext = React.createContext<null | TIntl>(null);
