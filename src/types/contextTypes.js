// @flow strict

import { appContextMock } from "data/appContextMock";
import { mockServices } from "services/mockServices";
import { defaultLocaleStrings } from "data/defaultLocaleStrings";

export type TServices = typeof mockServices;
export type TLocaleStrings = typeof defaultLocaleStrings;
export type TAppContext = typeof appContextMock;