import { baseApi } from './baseApi';

import { CreateEventFormData, IEvent } from '@/types/index';

export const eventsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    findAllEvents: builder.query<IEvent[], void>({
      query: () => `/event`,
    }),
    createEvent: builder.mutation<IEvent, CreateEventFormData>({
      query: (body) => ({ url: `/event`, method: 'POST', body }),
    }),
  }),
});

export const { useCreateEventMutation, useFindAllEventsQuery } = eventsApi;
