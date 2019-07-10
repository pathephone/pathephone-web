// @flow strict

export class HomelessContextConsumerError extends Error {
  message = "Context has been used outside of the provider.";
}

export class UnreachableError extends TypeError {
  constructor(param: empty) {
    super(param);
    this.message = "Unreachable type error.";
  }
}
