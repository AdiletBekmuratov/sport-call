import { z } from 'zod';

import {
  ERROR_INCORRECT_EMAIL,
  ERROR_INCORRECT_PHONE_FORMAT,
  ERROR_MIN_VAL,
  ERROR_PASSWORD_NOT_MATCH,
  ERROR_REQUIRED_FIELD,
  ERROR_WEAK_PASSWORD,
} from '@/utils/error.messages';


export const RegisterSchema = z
  .object({
    email: z.string({ required_error: ERROR_REQUIRED_FIELD }).email(ERROR_INCORRECT_EMAIL),
    firstname: z.string({ required_error: ERROR_REQUIRED_FIELD }).min(1, ERROR_MIN_VAL(1)),
    lastname: z.string({ required_error: ERROR_REQUIRED_FIELD }).min(1, ERROR_MIN_VAL(1)),
    phone: z
      .string({ required_error: ERROR_REQUIRED_FIELD })
      .regex(/^\+7 \(\d{3}\) \d{3} \d{4}$/, ERROR_INCORRECT_PHONE_FORMAT),
    password: z
      .string({ required_error: ERROR_REQUIRED_FIELD })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*-.+_])(?=.{8,})/,
        ERROR_WEAK_PASSWORD
      ),
    confirm: z.string({ required_error: ERROR_REQUIRED_FIELD }),
  })
  .required()
  .refine((data) => data.password === data.confirm, {
    message: ERROR_PASSWORD_NOT_MATCH,
    path: ['confirm'],
  });

export type RegisterFormData = z.infer<typeof RegisterSchema>;
