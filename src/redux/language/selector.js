import { createSelector } from 'reselect';

const selectLanguage = state => state.language;

// eslint-disable-next-line import/prefer-default-export
export const makeSelectLocale = () => createSelector(selectLanguage, language => language.locale);
