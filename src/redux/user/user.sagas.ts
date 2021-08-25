import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';
import {
  signUpStart,
  signUpSuccess,
  signUpFailure,
} from './user.reducer';

function* signUp() {
  try {
    yield put(signUpSuccess());
  } catch (error) {
    yield put(signUpFailure());
  }
}

function* onSignUp() {
  yield takeLatest(signUpStart, signUp);
}

export function* userSagas() {
  yield all([
    call(onSignUp),
  ]);
}
