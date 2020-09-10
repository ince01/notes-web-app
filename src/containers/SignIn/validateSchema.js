import * as yup from 'yup';
import messages from './messages';

// eslint-disable-next-line import/prefer-default-export
export const signInSchema = f =>
  yup.object().shape({
    email: yup
      .string()
      .email(f(messages.validate.email))
      .required(f(messages.validate.require, { field: 'Email' })),
    password: yup
      .string()
      .required(f(messages.validate.require, { field: 'Password' }))
      .min(6, f(messages.validate.minLength, { length: 6 })),
    remember: yup.boolean(),
  });
