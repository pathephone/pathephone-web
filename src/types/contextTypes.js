// @flow strict

import { appContextMock } from "data/appContextMock";
import { mockServices } from "services/mockServices";
import { defaultLocaleStrings } from "data/defaultLocaleStrings";

export type TServicesContext = typeof mockServices;
export type TLocaleStringsContext = typeof defaultLocaleStrings;
export type TAppContext = typeof appContextMock;