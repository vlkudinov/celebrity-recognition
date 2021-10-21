import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { HistoryImage, RootState, ImageData } from 'src/model';
import * as api from 'src/api';
import {
  getHistoryStart,
  getHistorySuccess,
  getHistoryFailure,
  updateHistorySuccess,
  updateHistoryFailure, updateHistoryStart,
} from 'src/redux/history/history.reducer';
import { enqueueSnackbar } from 'src/redux/snackbar/snackbar.reducer';

function* getHistoryWorker() {
  try {
    const userId : string = yield select(({ user }: RootState) => user.id);
    const history: HistoryImage[] = yield call(api.get, `history/${userId}`);
    yield put(getHistorySuccess(history));
  } catch (error) {
    yield put(enqueueSnackbar({ message: error.message }));
    yield put(getHistoryFailure(error));
  }
}

function* updateHistoryWorker() {
  try {
    const userId : string = yield select(({ user }: RootState) => user.id);
    const imageUrl : string = yield select(({ image }: RootState) => image.imageUrl);
    const data : ImageData[] | [] = yield select(({ image }: RootState) => image.data);
    yield call(api.post, `history/${userId}`, {
      imageUrl, data,
    });
    yield put(updateHistorySuccess());
    yield put(getHistoryStart());
  } catch (error) {
    yield put(enqueueSnackbar({ message: error.message }));
    yield put(updateHistoryFailure(error));
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
