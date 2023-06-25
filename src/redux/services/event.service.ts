import { baseApi } from './baseApi';

import { CreateEventFormData, IEvent } from '@/types/index';
import { providesList } from '@/utils/providesList';

export const eventsApi = baseApi.enhanceEndpoints({ addTagTypes: ['Events'] }).injectEndpoints({
  endpoints: (builder) => ({
    findAllEvents: builder.query<IEvent[], void>({
      query: () => `/event`,
      providesTags: (result) => providesList(result, 'Events'),
    }),
    createEvent: builder.mutation<IEvent, CreateEventFormData>({
      query: (body) => ({ url: `/event`, method: 'POST', body }),
      invalidatesTags: [{ type: 'Events', id: 'LIST' }],
    }),
  }),
});

export const { useCreateEventMutation, useFindAllEventsQuery } = eventsApi;
