import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/user.reducer';
import imageReducer from './image/image.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  image: imageReducer,
});
