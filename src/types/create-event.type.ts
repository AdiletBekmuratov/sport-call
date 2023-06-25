import { z } from 'zod';

import { ERROR_MIN_VAL, ERROR_REQUIRED_FIELD } from '@/utils/error.messages';

export const CreateEventSchema = z
  .object({
    name: z.string({ required_error: ERROR_REQUIRED_FIELD }).min(1, ERROR_MIN_VAL(1)),
    description: z.string({ required_error: ERROR_REQUIRED_FIELD }).min(1, ERROR_MIN_VAL(1)),
    price: z.number(),
    fee: z.number(),
    min_people: z.number(),
    max_people: z.number(),
    cases: z.array(z.string()),
    private: z.boolean(),
  })
  .required();

export type CreateEventFormData = z.infer<typeof CreateEventSchema>;
export type IEvent = CreateEventFormData & { id: number };
