import {
  ERROR_INCORRECT_EMAIL,
  ERROR_REQUIRED_FIELD,
  ERROR_WEAK_PASSWORD,
} from './../utils/error.messages';
import { z } from 'zod';

export const LoginSchema = z
  .object({
    email: z.string({ required_error: ERROR_REQUIRED_FIELD }).email(ERROR_INCORRECT_EMAIL),
    password: z
      .string({ required_error: ERROR_REQUIRED_FIELD })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*-.+_])(?=.{8,})/,
        ERROR_WEAK_PASSWORD
      ),
  })
  .required();
export type LoginFormData = z.infer<typeof LoginSchema>;
