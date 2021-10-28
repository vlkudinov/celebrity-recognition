import snackbarReducer, {
  enqueueSnackbar,
  removeSnackbar, initialState,
} from 'src/redux/snackbar/snackbar.reducer';
import { Notification } from 'src/model';
import { AnyAction } from '@reduxjs/toolkit';
import { notificationMock } from 'src/__fixtures__/reducers/snackbar';

describe('snackbar reducer', () => {
  test('should return the initial state', () => {
    expect(snackbarReducer(undefined, {} as AnyAction))
      .toEqual(initialState);
  });
  test('should add notification to notification list', () => {
    const { notifications } = snackbarReducer(initialState, enqueueSnackbar(notificationMock));
    const notification: Notification = notifications[0];
    expect(notification.message).toEqual(notificationMock.message);
    expect(notification.options?.variant).toEqual(notificationMock.options?.variant);
  });
  test('should remove notification from notification list', () => {
    const state = snackbarReducer(initialState, enqueueSnackbar(notificationMock));
    expect(state.notifications).toHaveLength(1);
    const notification: Notification = state.notifications[0];
    const newState = snackbarReducer(initialState, removeSnackbar(notification.key!));
    expect(newState.notifications).toHaveLength(0);
  });
});
