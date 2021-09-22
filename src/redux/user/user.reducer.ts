import { createSlice, PayloadAction, PayloadActionCreator } from '@reduxjs/toolkit';
import {
  UserCredentials, UserState, SignInPayload, SignUpPayload, UpdateProfilePayload, UserAuthResponse,
} from 'src/model';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    credentials: null,
    isSignedIn: false,
    isProfileOpened: false,
    loading: false,
    error: null,
  },
  reducers: {
    signInStart: (state: UserState, _: PayloadAction<SignInPayload | undefined>) => {
      state.loading = true;
      state.isSignedIn = false;
      state.error = null;
    },
    signInSuccess: (state: UserState, action:PayloadAction<UserAuthResponse>) => {
      state.isSignedIn = action.payload.success;
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
    signUpSuccess: (state: UserState, action:PayloadAction<UserAuthResponse>) => {
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
    signOutSuccess: (state: UserState, action:PayloadAction<UserAuthResponse>) => {
      state.credentials = null;
      state.isSignedIn = false;
      state.loading = false;
    },
    signOutFailure: (state: UserState, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload;
    },

    getProfileStart: (state: UserState, _: PayloadAction<UserAuthResponse>) => {
      state.loading = true;
      state.error = null;
    },
    getProfileSuccess: (state: UserState, action:PayloadAction<UserCredentials>) => {
      state.credentials = action.payload;
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
    updateProfileSuccess: (state: UserState) => {
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
