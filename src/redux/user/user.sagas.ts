import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { SignInPayload, SignUpPayload } from 'src/model/user';
import { UserCredentials } from 'src/model';
import * as api from 'src/api';
import {
  signInStart,
  signInSuccess,
  signInFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
} from './user.reducer';

function* signInWorker({ payload } : PayloadAction<SignInPayload>) {
  try {
    const user: UserCredentials = yield call(api.post, 'http://localhost:5000/sign-in', payload);
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailure(error as Error));
  }
}

function* signUpWorker({ payload } : PayloadAction<SignUpPayload>) {
  try {
    const user: UserCredentials = yield call(api.post, 'http://localhost:5000/sign-up', payload);
    yield put(signUpSuccess(user));
  } catch (error) {
    yield put(signUpFailure(error as Error));
  }
}

function* signInWatcher() {
  yield takeLatest(signInStart, signInWorker);
}

function* signUpWatcher() {
  yield takeLatest(signUpStart, signUpWorker);
}

export function* userSagas() {
  yield all([
    call(signInWatcher),
    call(signUpWatcher),
  ]);
}
