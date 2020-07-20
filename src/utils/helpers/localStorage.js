/* eslint-disable no-console */
import { isNil } from 'lodash';

const tokenKey = '__token';

export function getToken() {
  try {
    return localStorage.getItem(tokenKey);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export function saveToken(token) {
  try {
    if (isNil(token)) {
      throw new Error('Token is not null or undefined');
    }
    localStorage.setItem(tokenKey, token);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function removeToken() {
  try {
    localStorage.removeItem(tokenKey);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
