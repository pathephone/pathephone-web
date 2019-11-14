export type AppScreen = "LOADING" | "PLAYER";

export type ViewState = {
  activeScreen: AppScreen;
  currentIntlCode: null | string;
};
