import { Intl } from "type/intl";

export type TAppScreen = "LOADING" | "PLAYER";

export type TAppState = {
  intl: null | Intl;
  activeScreen: TAppScreen;
};
