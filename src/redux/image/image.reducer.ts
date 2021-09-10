import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HistoryImage, ImageState, ImagePayload } from 'src/model';

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
      state.imageUrl = '';
    },
    sendImageSuccess: (state: ImageState, action: PayloadAction<ImagePayload>) => {
      state.loading = false;
      state.imageUrl = state.input;
      state.box = action.payload.box;
      state.concepts = action.payload.concepts;
      state.error = null;
    },
    sendImageFailure: (state: ImageState, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload;
    },
    getImageFromHistory: (state: ImageState, action: PayloadAction<HistoryImage>) => {
      const { link, box, concepts } = action.payload;

      state.input = link;
      state.imageUrl = link;
      state.box = box;
      state.concepts = concepts;
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
} = imageSlice.actions;

export default imageSlice.reducer;
