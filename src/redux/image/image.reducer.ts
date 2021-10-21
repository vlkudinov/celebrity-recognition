import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HistoryImage, ImageState, ImageData } from 'src/model';

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    id: '',
    input: '',
    imageUrl: '',
    width: 0,
    height: 0,
    loading: false,
    error: null,
    data: [],
  },
  reducers: {
    saveInput: (state: ImageState, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    setImageSize: (state: ImageState, action: PayloadAction<{ width: number; height: number }>) => {
      const { width, height } = action.payload;
      state.width = width;
      state.height = height;
    },
    sendImageStart: (state: ImageState) => {
      state.loading = true;
      state.imageUrl = '';
      state.data = [];
    },
    sendImageSuccess: (state: ImageState, action: PayloadAction<ImageData[]>) => {
      state.loading = false;
      state.imageUrl = state.input;
      state.data = action.payload;
      state.error = null;
    },
    sendImageFailure: (state: ImageState, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload;
    },
    getImageFromHistory: (state: ImageState, action: PayloadAction<HistoryImage>) => {
      const { link, data } = action.payload;
      state.input = link;
      state.imageUrl = link;
      state.width = 0;
      state.height = 0;
      state.data = data;
    },
    getHoveredFaceId: (state: ImageState, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    resetImageState: (state: ImageState) => {
      state.input = '';
      state.imageUrl = '';
      state.width = 0;
      state.height = 0;
      state.data = [];
    },
  },
});

export const {
  saveInput,
  setImageSize,
  sendImageStart,
  sendImageSuccess,
  sendImageFailure,
  getImageFromHistory,
  getHoveredFaceId,
  resetImageState,
} = imageSlice.actions;

export default imageSlice.reducer;
