import React from 'react';
import { render } from 'setupTests';
import SignIn from '../SignIn';

test('Render Sign in page without errors', () => {
  const component = render(<SignIn />);

  component.getAllByTestId('email');

  component.getAllByTestId('password');

  component.getAllByTestId('signin-button');

  expect(component).toMatchSnapshot();
});
