import { all, call } from 'redux-saga/effects';
import { userSagas } from 'src/redux/user/user.sagas';
import { imageSagas } from 'src/redux/image/image.sagas';
import { historySagas } from 'src/redux/history/history.sagas';
import { snackbarSagas } from 'src/redux/snackbar/snackbar.sagas';

export default function* rootSaga() {
  yield all(
    [
      call(userSagas),
      call(imageSagas),
      call(historySagas),
      call(snackbarSagas),
    ],
  );
}
