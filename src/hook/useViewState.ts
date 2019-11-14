import { ViewState } from "type/state/viewState";
import { useAppState } from "hook/useAppState";

export const useViewState = (): ViewState => {
  const { viewState } = useAppState();

  return viewState;
};
