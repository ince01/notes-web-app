import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createInjectorsEnhancer } from 'redux-injectors';
import createReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const runSaga = sagaMiddleware.run;

const injectorsEnhancer = createInjectorsEnhancer({
  createReducer,
  runSaga,
});

const store = configureStore({
  reducer: createReducer(),
  middleware: [sagaMiddleware],
  enhancers: [injectorsEnhancer],
});

export default store;
