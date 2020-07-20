/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { actionCreator } from '../../utils/redux';
import { detectBrowserLocale } from '../../utils/helpers';

export const actions = {
  changeLocale: actionCreator('language/CHANGE_LOCALE'),
};

const inititalState = {
  locale: detectBrowserLocale(),
};

export default createReducer(inititalState, {
  [actions.changeLocale]: (state, action) => {
    state.locale = action.payload.locale;
  },
});
