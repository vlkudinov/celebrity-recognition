import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  UserCredentials, UserState, SignInPayload, SignUpPayload,
} from 'src/model';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    credentials: null,
    isSignedIn: false,
    loading: false,
    error: null,
  },
  reducers: {
    signInStart: (state: UserState, _: PayloadAction<SignInPayload>) => {
      state.loading = true;
    },
    signInSuccess: (state: UserState, action:PayloadAction<UserCredentials>) => {
      state.credentials = action.payload;
      state.isSignedIn = true;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state: UserState, action:PayloadAction<unknown>) => {
      state.loading = false;
      state.error = action.payload;
    },
    signUpStart: (state: UserState, _: PayloadAction<SignUpPayload>) => {
      state.loading = true;
    },
    signUpSuccess: (state: UserState, action:PayloadAction<UserCredentials>) => {
      state.credentials = action.payload;
      state.isSignedIn = true;
      state.loading = false;
      state.error = null;
    },
    signUpFailure: (state: UserState, action:PayloadAction<unknown>) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOut: (state: UserState) => {
      state.credentials = null;
      state.isSignedIn = false;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
  signOut,
} = userSlice.actions;

export default userSlice.reducer;
