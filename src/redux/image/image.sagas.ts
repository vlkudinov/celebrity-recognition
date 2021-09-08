import {
  takeLatest, call, put, all, select,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  SignInPayload, SignUpPayload, ImageState, RootState, UserCredentials, SendImagePayload,
} from 'src/model';
import * as api from 'src/api';
import {
  sendImageStart,
  sendImageSuccess,
  sendImageFailure,
} from './image.reducer';

function* sendImageWorker() {
  try {
    const input : string = yield select(({ image }: RootState) => image.input);
    const image: SendImagePayload = yield call(api.sendData, 'http://localhost:5000/imageurl', { input });
    yield put(sendImageSuccess(image));
  } catch (error) {
    yield put(sendImageFailure(error));
  }
}

function* sendImageWatcher() {
  yield takeLatest(sendImageStart, sendImageWorker);
}

export function* imageSagas() {
  yield all([
    call(sendImageWatcher),
  ]);
}
