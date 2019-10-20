import * as React from "react";

import { useService } from "hook/useService";
import { useAsync } from "hook/useAsync";

import { useDispatch } from "./useDispatch";
import { Intl } from "type/intl";

export const useGetIntlService = () => {
  const { getIntl } = useService();

  const [intlPromiseState, injectIntlPromise] = useAsync<Intl>();

  const dispatch = useDispatch();

  React.useEffect(() => {
    injectIntlPromise(getIntl());
  }, [getIntl, injectIntlPromise]);

  React.useEffect(() => {
    if (intlPromiseState) {
      const { pending, value } = intlPromiseState;

      if (pending) {
        dispatch({
          type: "GET_INTL__PENDING"
        });
      }

      if (value) {
        dispatch({
          type: "GET_INTL__RESOLVED",
          payload: value
        });
      }
    }
  }, [dispatch, injectIntlPromise, intlPromiseState]);
};
