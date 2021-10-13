import { PayloadAction } from '@reduxjs/toolkit';
import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import { enqueueSnackbar } from 'src/redux/snackbar/snackbar.reducer';
import { sendImageFailure } from 'src/redux/image/image.reducer';
import {
  signInFailure,
  signUpFailure,
  signOutFailure,
  getProfileFailure,
  getProfileSuccess,
  updateProfileFailure,
  updateProfileSuccess, signOutSuccess,
} from '../user/user.reducer';
import { getHistoryFailure, updateHistoryFailure } from '../history/history.reducer';

function* showSuccessSnackbar<T>({ payload } : PayloadAction<{ message: string }>) {
  if (payload.message) {
    yield put(enqueueSnackbar({ message: payload.message, options: { variant: 'success' } }));
  }
}

function* showErrorSnackbar({ payload } : PayloadAction<Error>) {
  yield put(enqueueSnackbar({ message: payload.message, options: { variant: 'error' } }));
}

function* onError() {
  yield takeLatest(signInFailure, showErrorSnackbar);
  yield takeLatest(signUpFailure, showErrorSnackbar);
  yield takeLatest(signOutFailure, showErrorSnackbar);

  yield takeLatest(getProfileFailure, showErrorSnackbar);
  yield takeLatest(updateProfileFailure, showErrorSnackbar);

  yield takeLatest(sendImageFailure, showErrorSnackbar);

  yield takeLatest(getHistoryFailure, showErrorSnackbar);
  yield takeLatest(updateHistoryFailure, showErrorSnackbar);
}

function* onSuccess() {
  yield takeLatest(getProfileSuccess, showSuccessSnackbar);
  yield takeLatest(updateProfileSuccess, showSuccessSnackbar);
  yield takeLatest(signOutSuccess, showSuccessSnackbar);
}

export function* snackbarSagas() {
  yield all([
    call(onError),
    call(onSuccess),
  ]);
}
