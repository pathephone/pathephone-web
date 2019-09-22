// @flow strict

export const setCustomInterval = (handleTick: () => void, interval: number) => {
  const intervalId = window.setInterval(handleTick, interval);

  return () => {
    window.clearInterval(intervalId);
  };
};
