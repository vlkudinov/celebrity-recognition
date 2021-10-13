import { UserState } from './user';
import { ImageState } from './image';
import { HistoryState } from './history';
import { SnackbarState } from './snackbar';

export interface RootState {
  user: UserState;
  image: ImageState;
  history: HistoryState;
  snackbar: SnackbarState;
}

export * from './user';
export * from './image';
export * from './history';
export * from './snackbar';
