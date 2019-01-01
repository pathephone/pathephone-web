// @flow strict

import * as React from 'react';

type TRef<TNode> = {
  current: TNode | null;
}

export function useOutsideClick <TNode> (
  wrapperRef: TRef<TNode>, onOutsideClick: () => void
) {
  React.useEffect(() => {

      const handleClick = (e: MouseEvent) => {

        const wrapperNode = wrapperRef.current;

        const targetNode = e.target;
        if (
          targetNode instanceof HTMLElement
          && wrapperNode instanceof HTMLElement
          && !wrapperNode.contains(targetNode)
        ) {
          onOutsideClick()
        }

      }

      window.addEventListener('click', handleClick)

      return () => {
        window.removeEventListener('click', handleClick)
      }
  },[wrapperRef, onOutsideClick])
}
