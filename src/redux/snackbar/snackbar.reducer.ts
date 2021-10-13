import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SnackbarKey } from 'notistack';
import { SnackbarState, Notification } from 'src/model';

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    notifications: [],
  },
  reducers: {
    enqueueSnackbar: (state: SnackbarState, action: PayloadAction<Notification>) => {
      const key = new Date().getTime() + Math.random();
      const newNotification : Notification = {
        key,
        message: action.payload.message,
        options: { ...action.payload.options },
      };

      state.notifications = [
        ...state.notifications,
        newNotification,
      ];
    },
    closeSnackbar: (state: SnackbarState, action: PayloadAction<SnackbarKey>) => {
      state.notifications = state.notifications.map((notification) => (
        notification.key === action.payload
          ? { ...notification, dismissed: true }
          : { ...notification }));
    },
    removeSnackbar: (state: SnackbarState, action: PayloadAction<SnackbarKey>) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.key !== action.payload,
      );
    },
  },
});

export const {
  enqueueSnackbar,
  closeSnackbar,
  removeSnackbar,
} = snackbarSlice.actions;

export default snackbarSlice.reducer;
