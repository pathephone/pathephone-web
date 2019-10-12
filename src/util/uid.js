// @flow strict

let uid = 0;

export const getUID = () => (uid += 1);

export const getUIDString = () => `${getUID()}`;
