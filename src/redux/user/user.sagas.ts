import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { SignInPayload } from 'src/model/user';
import { UserCredentials } from 'src/model';
import * as api from 'src/api';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from './user.reducer';

function* signInWorker({ payload: { email, password } } : PayloadAction<SignInPayload>) {
  try {
    const user: UserCredentials = yield call(api.signIn, { email, password });
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWatcher() {
  yield takeLatest(signInStart, signInWorker);
}

export function* userSagas() {
  yield all([
    call(signInWatcher),
  ]);
}
