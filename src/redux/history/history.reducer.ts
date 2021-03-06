import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HistoryState, HistoryImage } from 'src/model';

export const initialState: HistoryState = {
  images: [],
  loading: false,
  error: null,
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    getHistoryStart: (state: HistoryState) => {
      state.loading = true;
      state.error = null;
    },
    getHistorySuccess: (state: HistoryState, action: PayloadAction<HistoryImage[]>) => {
      state.loading = false;
      state.images = action.payload;
    },
    getHistoryFailure: (state:HistoryState, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateHistoryStart: () => {},
    updateHistorySuccess: () => {},
    updateHistoryFailure: (state:HistoryState, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
  },
});

export const {
  getHistoryStart,
  getHistorySuccess,
  getHistoryFailure,
  updateHistoryStart,
  updateHistorySuccess,
  updateHistoryFailure,
} = historySlice.actions;

export default historySlice.reducer;
