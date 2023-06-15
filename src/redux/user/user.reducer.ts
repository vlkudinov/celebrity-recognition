import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  UserCredentials, UserState, SignInPayload, SignUpPayload, UpdateProfilePayload, UserAuthResponse,
} from 'src/model';

export const initialState : UserState = {
  id: null,
  credentials: null,
  isSignedIn: false,
  isProfileOpened: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state: UserState, _: PayloadAction<SignInPayload>) => {
      state.loading = true;
      state.isSignedIn = false;
      state.error = null;
    },
    signInSuccess: (state: UserState, action:PayloadAction<UserAuthResponse>) => {
      state.isSignedIn = action.payload.success;
      state.id = action.payload.userId;
      state.loading = false;
    },
    signInFailure: (state: UserState, action:PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload;
    },

    signUpStart: (state: UserState, _: PayloadAction<SignUpPayload>) => {
      state.loading = true;
      state.error = null;
    },
    signUpSuccess: (state: UserState, _:PayloadAction<UserAuthResponse>) => {
      state.loading = false;
    },
    signUpFailure: (state: UserState, action:PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload;
    },

    signOutStart: (state: UserState) => {
      state.loading = true;
      state.error = null;
    },
    signOutSuccess: (state: UserState, _:PayloadAction<{ message: string }>) => {
      state.credentials = null;
      state.isSignedIn = false;
      state.loading = false;
    },
    signOutFailure: (state: UserState, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload;
    },

    getProfileStart: (state: UserState) => {
      state.loading = true;
      state.error = null;
    },
    getProfileSuccess: (state: UserState, action:PayloadAction<{ credentials: UserCredentials, message: string }>) => {
      state.credentials = action.payload.credentials;
      state.loading = false;
    },
    getProfileFailure: (state: UserState, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateProfileStart: (state: UserState, _: PayloadAction<UpdateProfilePayload>) => {
      state.loading = true;
      state.error = null;
    },
    updateProfileSuccess: (state: UserState, _: PayloadAction<{ userId: number, message: string }>) => {
      state.loading = false;
    },
    updateProfileFailure: (state: UserState, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload;
    },

    setProfileOpen: (state: UserState, action:PayloadAction<boolean>) => {
      state.isProfileOpened = action.payload;
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
  signOutStart,
  signOutSuccess,
  signOutFailure,
  setProfileOpen,
  getProfileStart,
  getProfileSuccess,
  getProfileFailure,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileFailure,
} = userSlice.actions;

export default userSlice.reducer;
