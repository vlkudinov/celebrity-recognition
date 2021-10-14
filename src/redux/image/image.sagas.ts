import {
  takeLatest, call, put, all, select,
} from 'redux-saga/effects';
import { RootState, ImageData } from 'src/model';
import * as api from 'src/api';
import {
  updateHistoryStart,
} from 'src/redux/history/history.reducer';
import { signOutSuccess } from 'src/redux/user/user.reducer';
import {
  sendImageStart,
  sendImageSuccess,
  sendImageFailure, resetImageState,
} from './image.reducer';

function* sendImageWorker() {
  try {
    const input : string = yield select(({ image }: RootState) => image.input);
    const image: ImageData[] | [] = yield call(api.post, 'imageurl', { input });
    yield put(sendImageSuccess(image));
    yield put(updateHistoryStart());
  } catch (error) {
    yield put(sendImageFailure(error));
  }
}

function* onSignOutWorker() {
  yield put(resetImageState());
}

function* sendImageWatcher() {
  yield takeLatest(sendImageStart, sendImageWorker);
}

function* onSignOut() {
  yield takeLatest(signOutSuccess, onSignOutWorker);
}

export function* imageSagas() {
  yield all([
    call(sendImageWatcher),
    call(onSignOut),
  ]);
}
