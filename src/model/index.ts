import { UserState } from './user';
import { ImageState } from './image';
import { HistoryState } from './history';

export interface RootState {
  user: UserState;
  image: ImageState;
  history: HistoryState;
}

export * from './user';
export * from './image';
export * from './history';
