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
import { selectUserFullName } from './user.selectors';

function* getSnapshotFromUserAuth(userAuth : UserAuthResponse) {
  try {
    yield call(setToken, userAuth.token);
    yield put(signInSuccess(userAuth));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWorker({ payload } : PayloadAction<SignInPayload>) {
  try {
    const userAuth: UserAuthResponse = yield call(api.post, 'sign-in', payload);

    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield call(removeToken);
    yield put(signInFailure(error));
  }
}

function* signUpWorker({ payload } : PayloadAction<SignUpPayload>) {
  try {
    const userAuth: UserAuthResponse = yield call(api.post, 'sign-up', payload);

    yield put(signUpSuccess(userAuth));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

function* getProfileWorker() {
  try {
    const userId: UserCredentials = yield select(({ user }) => user.id);
    const currentCredentials: UserCredentials = yield select(({ user }) => user.credentials);
    const credentials: UserCredentials = yield call(api.get, `profile/${userId}`);
    const fullName = `${credentials.firstName} ${credentials.lastName}`;
    const message = !currentCredentials ? `Welcome, ${fullName}!` : '';

    yield put(getProfileSuccess({ credentials, message }));
  } catch (error) {
    yield put(getProfileFailure(error));
  }
}

function* updateProfileWorker({ payload } : PayloadAction<UpdateProfilePayload>) {
  try {
    const userId : number = yield select(({ user }: RootState) => user.id);
    yield call(api.post, `profile/${userId}`, { formInput: payload });
    yield put(updateProfileSuccess({ userId, message: 'Profile successfully updated' }));
    yield put(setProfileOpen(false));
  } catch (error) {
    yield put(updateProfileFailure(error));
  }
}

function* signOutWorker() {
  try {
    const userId : number = yield select(({ user }: RootState) => user.id);
    const fullName: string = yield select(selectUserFullName);

    yield call(api.post, 'sign-out', { id: userId });
    yield call(removeToken);
    yield put(signOutSuccess({ message: `Goodbye, ${fullName}!` }));
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

function* signInWatcher() {
  yield takeLatest(signInStart, signInWorker);
}

function* signUpWatcher() {
  yield takeLatest(signUpStart, signUpWorker);
}

function* signInAfterSignUp({ payload } : PayloadAction<UserAuthResponse>) {
  yield getSnapshotFromUserAuth(payload);
}

function* onSignUpSuccess() {
  yield takeLatest(signUpSuccess, signInAfterSignUp);
}

function* getProfile() {
  yield put(getProfileStart());
}

function* getProfileWatcher() {
  yield takeLatest(getProfileStart, getProfileWorker);
}

function* onSignInSuccess() {
  yield takeLatest(signInSuccess, getProfile);
  yield takeLatest(updateProfileSuccess, getProfile);
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
    call(signUpWatcher),
    call(signOutWatcher),
    call(onSignInSuccess),
    call(onSignUpSuccess),
    call(getProfileWatcher),
    call(updateProfileWatcher),
  ]);
}
