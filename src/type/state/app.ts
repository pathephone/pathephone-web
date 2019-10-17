import { Intl } from "type/intl";

export type AppScreen = "LOADING" | "PLAYER";

export type AppState = {
  intl: null | Intl;
  activeScreen: AppScreen;
};
