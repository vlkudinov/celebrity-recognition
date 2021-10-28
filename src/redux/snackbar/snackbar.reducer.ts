import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SnackbarKey } from 'notistack';
import { SnackbarState, Notification } from 'src/model';

export const initialState = {
  notifications: [],
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    enqueueSnackbar: (state: SnackbarState, action: PayloadAction<Notification>) => {
      const key = new Date().getTime() + Math.random();
      const newNotification : Notification = {
        key,
        ...action.payload,
      };

      state.notifications = [
        ...state.notifications,
        newNotification,
      ];
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
  removeSnackbar,
} = snackbarSlice.actions;

export default snackbarSlice.reducer;
