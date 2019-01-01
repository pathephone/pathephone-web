// @flow strict

import * as React from 'react';

type TProps = {
  children: React.Node;
  onOutsideClick(): void;
}

export const OutsideClickDetector = (props: TProps) => {

  const wrapperRef = React.createRef<HTMLDivElement>()

  const { onOutsideClick, ...wrapperProps } = props;

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const wrapperNode = wrapperRef.current;
      const targetNode = e.target;
      if (
        targetNode instanceof HTMLElement 
        && wrapperNode
        && !wrapperNode.contains(targetNode)
      ) {
        onOutsideClick()
      }
    }
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  })

  return (
    <div {...wrapperProps} ref={wrapperRef} />
  )
}
