// @flow strict

export class HomelessContextConsumerError extends Error {
  message = "Context has been used outside of the provider.";
}
