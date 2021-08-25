import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    loading: false,
    error: '',
  },
  reducers: {
    signUpStart: () => {},
    signUpSuccess: () => {},
    signUpFailure: () => {},
  },
});

export const {
  signUpStart,
  signUpSuccess,
  signUpFailure,
} = userSlice.actions;

export default userSlice.reducer;
