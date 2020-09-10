import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import store from 'redux/store';
import AppLocale from './config/translations';

// eslint-disable-next-line react/prop-types
const ProviderWrapper = ({ children }) => {
  const currentAppLocale = AppLocale.en;

  return (
    <Provider store={store}>
      <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages} onError={() => {}}>
        {children}
      </IntlProvider>
    </Provider>
  );
};

const customRender = (ui, renderOptions) => render(ui, { wrapper: ProviderWrapper, ...renderOptions });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
