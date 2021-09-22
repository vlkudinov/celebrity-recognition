import {
  takeLatest, call, put, all, select,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  SignInPayload, SignUpPayload, UpdateProfilePayload, UserAuthResponse,
} from 'src/model/user';
import { RootState, UserCredentials } from 'src/model';
import * as api from 'src/api';
import {
  signInStart,
  signInSuccess,
  signInFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
  signOutStart,
  signOutSuccess,
  signOutFailure,
  getProfileStart,
  getProfileSuccess,
  getProfileFailure,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileFailure,
  setProfileOpen,
} from './user.reducer';
import { setToken, removeToken } from './user.utils';

function* getSnapshotFromUserAuth(userAuth : UserAuthResponse) {
  try {
    yield call(setToken, userAuth.token);
    yield put(signInSuccess(userAuth));
  } catch (error) {
    yield put(signInFailure(error as Error));
  }
}

function* signInWorker({ payload } : PayloadAction<SignInPayload>) {
  try {
    const userAuth: UserAuthResponse = yield call(api.post, 'http://188.166.167.236:5000/sign-in', payload);

    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error as Error));
  }
}

function* signUpWorker({ payload } : PayloadAction<SignUpPayload>) {
  try {
    const userAuth: UserAuthResponse = yield call(api.post, 'http://188.166.167.236:5000/sign-up', payload);

    yield put(signUpSuccess(userAuth));
  } catch (error) {
    yield put(signUpFailure(error as Error));
  }
}

function* signOutWorker() {
  try {
    const id : string = yield select(({ user }: RootState) => user?.credentials?.id);
    const userAuth: UserAuthResponse = yield call(api.post, 'http://188.166.167.236:5000/sign-out', { id });
    yield call(removeToken);
    yield put(signOutSuccess(userAuth));
  } catch (error) {
    yield put(signOutFailure(error as Error));
  }
}

function* getProfileWorker({ payload } : PayloadAction<UserAuthResponse>) {
  try {
    const { userId: id } = payload;
    const credentials: UserCredentials = yield call(api.get, `http://188.166.167.236:5000/profile/${id}`);
    yield put(getProfileSuccess(credentials));
  } catch (error) {
    yield put(getProfileFailure(error as Error));
  }
}

function* updateProfileWorker({ payload } : PayloadAction<UpdateProfilePayload>) {
  try {
    const id : string = yield select(({ user }: RootState) => user?.credentials?.id);
    yield call(api.post, `http://188.166.167.236:5000/profile/${id}`, { formInput: payload });
    yield put(updateProfileSuccess());
    yield put(setProfileOpen(false));
  } catch (error) {
    yield put(updateProfileFailure(error as Error));
  }
}

function* signInWatcher() {
  yield takeLatest(signInStart, signInWorker);
}

function* signUpWatcher() {
  yield takeLatest(signUpStart, signUpWorker);
}

// eslint-disable-next-line max-len
export function* signInAfterSignUp({ payload } : PayloadAction<UserAuthResponse>) {
  yield getSnapshotFromUserAuth(payload);
}

export function* onSignUpSuccess() {
  yield takeLatest(signUpSuccess, signInAfterSignUp);
}

export function* getProfile({ payload } : PayloadAction<UserAuthResponse>) {
  yield put(getProfileStart(payload));
}

function* getProfileWatcher() {
  yield takeLatest(getProfileStart, getProfileWorker);
}

export function* onSignInSuccess() {
  yield takeLatest(signInSuccess, getProfile);
}

function* updateProfileWatcher() {
  yield takeLatest(updateProfileStart, updateProfileWorker);
}

function* signOutWatcher() {
  yield takeLatest(signOutStart, signOutWorker);
}

export function* userSagas() {
  yield all([
    call(signInWatcher),
    call(onSignInSuccess),
    call(signUpWatcher),
    call(signOutWatcher),
    call(onSignUpSuccess),
    call(getProfileWatcher),
    call(updateProfileWatcher),
  ]);
}
