import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ConfigProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { Spin, ErrorBoundary } from './components';
import { makeSelectLocale } from './redux/language/selector';
import AppLocale from './config/translations';

function AppProvider({ children }) {
  const locale = useSelector(makeSelectLocale());
  const currentAppLocale = AppLocale[locale];
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spin />}>
        <ConfigProvider locale={currentAppLocale.antd}>
          <IntlProvider locale={locale} messages={currentAppLocale.messages}>
            {React.Children.only(children)}
          </IntlProvider>
        </ConfigProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppProvider;
