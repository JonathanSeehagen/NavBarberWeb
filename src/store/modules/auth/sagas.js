import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import {
  AUTH_PERSIST_REHYDRATE,
  AUTH_SIGN_IN_REQUEST,
  // AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_UP_REQUEST,
  // AUTH_SIGN_FAILURE,
  AUTH_SIGN_OUT,
} from './actionsTypes';

import history from '../../../services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    // eslint-disable-next-line no-unused-vars
    const { email, password } = payload;

    /**
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });
     */

    // const { token, user } = response.data;

    const user_string = JSON.stringify({
      user: {
        id: 1,
        name: 'Cliente1',
        email: 'cliente1@navbarber.com',
        provider: true,
      },
    });

    const { user } = JSON.parse(user_string);

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg3MDgzNTAxLCJleHAiOjE1ODc2ODgzMDF9.6-JNL1TIf-i0-8DEt2R74N1_C3cIJf4-a4BFusW1Zsw';

    if (!user.provider) {
      toast.error('Usuário não é prestador');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error(err.message);
    // toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados!');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest(AUTH_PERSIST_REHYDRATE, setToken),
  takeLatest(AUTH_SIGN_IN_REQUEST, signIn),
  takeLatest(AUTH_SIGN_UP_REQUEST, signUp),
  takeLatest(AUTH_SIGN_OUT, signOut),
]);
