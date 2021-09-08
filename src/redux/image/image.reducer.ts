import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageState, SendImagePayload } from 'src/model';

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    input: '',
    imageUrl: '',
    width: 0,
    height: 0,
    value: 0,
    id: '',
    box: null,
    concepts: [],
    loading: false,
    error: null,
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
      state.box = null;
      state.concepts = [];
    },
    sendImageSuccess: (state: ImageState, action: PayloadAction<SendImagePayload>) => {
      state.loading = false;
      state.imageUrl = state.input;
      state.box = action.payload.box;
      state.concepts = action.payload.concepts;
    },
    sendImageFailure: (state: ImageState, action: PayloadAction<unknown>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  saveInput,
  setImageSize,
  sendImageStart,
  sendImageSuccess,
  sendImageFailure,
} = imageSlice.actions;

export default imageSlice.reducer;
