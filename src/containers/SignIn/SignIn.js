import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { Form, Button, Input, Typography } from 'components';
import { signInSchema } from './validateSchema';
import messages from './messages';
import SignInStyleWrapper from './SignIn.style';

function SignIn() {
  const { formatMessage: f } = useIntl();

  const { control, errors } = useForm({
    mode: 'onBlur',
    validationSchema: signInSchema(f),
    defaultValues: { email: '', password: '' },
  });

  return (
    <SignInStyleWrapper>
      <div className="flex flex-col w-96 max-w-full bg-white rounded-lg p-5 shadow-lg">
        <Typography.Title className="flex justify-center items-center text-center" level={2}>
          Hello !
        </Typography.Title>
        <Typography.Text className="flex justify-center items-center text-center mb-3">
          Need an account?&nbsp;<a href="https://my.supernotes.app/">Register</a>
        </Typography.Text>
        <Form layout="vertical">
          <Form.Item
            label={f(messages.label.email)}
            validateStatus={errors?.email ? 'error' : 'success'}
            help={errors?.email?.message}
          >
            <Controller
              as={<Input data-testid="email" size="large" placeholder={f(messages.label.email)} autoComplete="true" />}
              name="email"
              control={control}
            />
          </Form.Item>
          <Form.Item
            label={f(messages.label.password)}
            validateStatus={errors?.password ? 'error' : 'success'}
            help={errors?.password?.message}
          >
            <Controller
              as={
                <Input.Password
                  data-testid="password"
                  size="large"
                  type="password"
                  placeholder={f(messages.label.password)}
                  autoComplete="false"
                />
              }
              name="password"
              control={control}
            />
          </Form.Item>
          <div className="mb-6 -mt-3 ml-3">
            <Link to="/forgotpassword" className="forgotPass">
              <FormattedMessage {...messages.description.forgotPass} />
            </Link>
          </div>
          <Button data-testid="signin-button" className="w-full" type="primary" htmlType="submit">
            <FormattedMessage {...messages.label.signIn} />
          </Button>
        </Form>
      </div>
    </SignInStyleWrapper>
  );
}

export default SignIn;
