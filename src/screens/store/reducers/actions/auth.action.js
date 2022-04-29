import {URL_AUTH_SIGNUP, URL_AUTH_SIGNIN} from '../../../../../utils/database';
import {authTypes} from '../types/auth.types';

const {SIGNUP, SIGNIN} = authTypes;

export const signup = (email, password) => {
  return async dispatch => {
    try {
      const response = await fetch(URL_AUTH_SIGNUP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password, returnSecureToken: true}),
      });

      const textResponse = await response.text();
      if (textResponse.includes('<!DOCTYPE html>')) {
        throw textResponse;
      }

      const result = JSON.parse(textResponse);
      if (result.error) {
        throw result.error.message;
      }

      dispatch({
        type: SIGNUP,
        token: result.idToken,
        userId: result.localId,
      });
    } catch (err) {
      console.error(err.toString());
    }
  };
};

export const signin = (email, password) => {
  return async dispatch => {
    const response = await fetch(URL_AUTH_SIGNIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });

    const result = await response.json();

    dispatch({
      type: SIGNIN,
      token: result.idToken,
      userId: result.localId,
    });
  };
};
