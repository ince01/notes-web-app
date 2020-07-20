import { combineReducers } from 'redux';
import languageReducer from './language/slice';

export default function createReducer(injectedReducers) {
  const rootReducer = combineReducers({
    ...injectedReducers,
    language: languageReducer,
  });
  return rootReducer;
}
