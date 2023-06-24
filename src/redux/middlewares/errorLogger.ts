import type { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { isRejectedWithValue } from '@reduxjs/toolkit';

import { addMessage } from '../slices/message';
import { AppDispatch } from '../store';

export const errorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const error = action.payload ?? action.error;
    const dispatch = api.dispatch as AppDispatch;

    const message =
      (error?.response && error?.response?.data && error?.response?.data?.message) ||
      error?.message ||
      error?.data?.message ||
      JSON.stringify(error, null, 2);

    dispatch(addMessage({ message, action: null }));
  }

  return next(action);
};
