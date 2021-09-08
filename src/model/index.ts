import { UserState } from './user';
import { ImageState } from './image';

export interface RootState {
  user: UserState;
  image: ImageState;
}

export * from './user';
export * from './image';
