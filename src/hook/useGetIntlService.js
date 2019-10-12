// @flow strict

import * as React from "react";

import { useServices } from "hook/useServices";
import { useAsync } from "hook/useAsync";

import { useDispatch } from "./useDispatch";

export const useGetIntlService = () => {
  const { getIntl } = useServices();

  const [intlPromiseState, injectIntlPromise] = useAsync();

  const dispatch = useDispatch();

  React.useEffect(() => {
    injectIntlPromise(getIntl());
  }, [getIntl, injectIntlPromise]);

  React.useEffect(() => {
    if (intlPromiseState) {
      const { pending, value } = intlPromiseState;

      if (pending) {
        dispatch({
          type: "GET_INTL_SERVICE__PENDING"
        });
      }

      if (value) {
        dispatch({
          type: "GET_INTL_SERVICE__RESOLVED",
          payload: value
        });
      }
    }
  }, [dispatch, injectIntlPromise, intlPromiseState]);
};
