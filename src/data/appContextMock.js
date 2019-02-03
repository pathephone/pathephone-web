// @flow strict

import { enLocaleStrings } from "data/localization/en.module";
import { mockServices } from "services/mock";

export const appContextMock = {
  services: mockServices,
  defaultLocaleStrings: enLocaleStrings
};