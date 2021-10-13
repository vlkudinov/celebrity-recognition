import { OptionsObject, SnackbarKey, SnackbarMessage } from 'notistack';

export interface SnackbarState {
  notifications: Notification[] | [];
}

export interface Notification {
  key?: SnackbarKey,
  message: SnackbarMessage;
  options?: OptionsObject
  dismissed?: boolean;
}
