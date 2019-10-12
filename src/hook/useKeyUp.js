// @flow strict

import * as React from "react";

type TParams = {
  [x: string]: (e: KeyboardEvent) => void
};

export const useKeyUp = (handlers: TParams) => {
  React.useEffect(() => {
    const handleClick = (e: KeyboardEvent) => {
      const handler = handlers[e.key];
      if (handler) {
        handler(e);
      }
    };
    window.addEventListener("keyup", handleClick);
    return () => {
      window.removeEventListener("keyup", handleClick);
    };
  });
};
