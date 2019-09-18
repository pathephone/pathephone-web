// @flow strict

export type TIntlDictionary = {||};

export type TIntl = {|
  dictionary: TIntlDictionary,
  currentCode: string,
  availableCodes: string[]
|};

export type TAppScreen = "LOADING" | "PLAYER";

export type TAppState = {|
  intl: null | TIntl,
  activeScreen: TAppScreen
|};
