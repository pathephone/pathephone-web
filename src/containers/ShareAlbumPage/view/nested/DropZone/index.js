// @flow strict

import type { TDropZoneProps } from "./view/state/useDropZoneState";

import { useDropZoneState } from "./view/state/useDropZoneState";
import { DropZoneView } from "./view/DropZoneView";

export const DropZone = (props: TDropZoneProps) => {
  const viewProps = useDropZoneState(props);
  return DropZoneView(viewProps);
};
