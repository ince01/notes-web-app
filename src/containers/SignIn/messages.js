import { defineMessages } from 'react-intl';

export const scope = 'signIn';

const messages = {
  label: defineMessages({
    pageTitle: {
      id: `${scope}.label.title`,
      defaultMessage: 'UTE Exchange',
    },
    email: {
      id: `${scope}.label.email`,
      defaultMessage: 'Email',
    },
    password: {
      id: `${scope}.label.password`,
      defaultMessage: 'Password',
    },
    rememberMe: {
      id: `${scope}.label.rememberMe`,
      defaultMessage: 'Remember me',
    },
    signIn: {
      id: `${scope}.label.signIn`,
      defaultMessage: 'Sign in',
    },
    signUp: {
      id: `${scope}.label.signUp`,
      defaultMessage: 'Sign up',
    },
  }),
  description: defineMessages({
    forgotPass: {
      id: `${scope}.description.forgotPass`,
      defaultMessage: 'Forgot password ?',
    },
  }),
  validate: defineMessages({
    require: {
      id: `${scope}.validate.require`,
      defaultMessage: '{field} is required',
    },
    email: {
      id: `${scope}.validate.email`,
      defaultMessage: 'Invaild email',
    },
    minLength: {
      id: `${scope}.validate.minLength`,
      defaultMessage: 'Minimum length is {length}',
    },
  }),
  error: defineMessages({
    invalidIdentifier: {
      id: `${scope}.error.invalidIdentifier`,
      defaultMessage: 'Invaild email or password',
    },
    userNotFound: {
      id: `${scope}.error.userNotFound`,
      defaultMessage: 'User not found',
    },
  }),
};

export default messages;
