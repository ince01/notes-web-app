import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppRouter from './AppRouter';
import AppProvider from './AppProvider';

function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </Provider>
  );
}

export default App;
