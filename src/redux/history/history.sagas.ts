import {
  takeLatest, call, put, all, select,
} from 'redux-saga/effects';
import { HistoryImage, RootState, ImageData } from 'src/model';
import * as api from 'src/api';
import {
  getHistoryStart,
  getHistorySuccess,
  getHistoryFailure,
  updateHistorySuccess,
  updateHistoryFailure, updateHistoryStart,
} from 'src/redux/history/history.reducer';

function* getHistoryWorker() {
  try {
    const userId : string = yield select(({ user }: RootState) => user.credentials?.id);
    const history: HistoryImage[] = yield call(api.get, `http://188.166.167.236:5000/history/${userId}`);
    yield put(getHistorySuccess(history));
  } catch (error) {
    yield put(getHistoryFailure(error as Error));
  }
}

function* updateHistoryWorker() {
  try {
    const userId : string = yield select(({ user }: RootState) => user.credentials?.id);
    const imageUrl : string = yield select(({ image }: RootState) => image.imageUrl);
    const data : ImageData[] | [] = yield select(({ image }: RootState) => image.data);
    yield call(api.post, 'http://188.166.167.236:5000/image', {
      imageUrl, id: userId, data,
    });
    yield put(updateHistorySuccess());
    yield put(getHistoryStart());
  } catch (error) {
    yield put(updateHistoryFailure());
  }
}

function* updateHistoryWatcher() {
  yield takeLatest(updateHistoryStart, updateHistoryWorker);
}

function* getHistoryWatcher() {
  yield takeLatest(getHistoryStart, getHistoryWorker);
}

export function* historySagas() {
  yield all([
    call(updateHistoryWatcher),
    call(getHistoryWatcher),
  ]);
}
