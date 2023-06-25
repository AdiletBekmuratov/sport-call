import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_URL } from '../http';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState }) => {
    const {
      auth: { token },
    } = getState() as RootState;
    if (token && token?.token) {
      headers.set('Authorization', `Bearer ${token?.token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: [],
  baseQuery,
  endpoints: (builder) => ({}),
});
