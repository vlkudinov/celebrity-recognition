import { combineReducers } from '@reduxjs/toolkit';
import userReducer from 'src/redux/user/user.reducer';
import imageReducer from 'src/redux/image/image.reducer';
import historyReducer from 'src/redux/history/history.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  image: imageReducer,
  history: historyReducer,
});
