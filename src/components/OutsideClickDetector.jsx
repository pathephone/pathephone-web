// @flow strict

import * as React from "react";
import { useOutsideClick } from "hooks/useOutsideClick";

type TProps = {
  children: React.Node,
  onOutsideClick(): void
};

export const OutsideClickDetector = (props: TProps) => {
  const wrapperRef = React.createRef<HTMLDivElement>();

  const { onOutsideClick, ...wrapperProps } = props;

  useOutsideClick<HTMLDivElement>(wrapperRef, onOutsideClick);

  return <div {...wrapperProps} ref={wrapperRef} />;
};
