import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SignInPayload } from 'src/model/user';
import { UserCredentials, UserState } from 'src/model';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isSignedIn: false,
    loading: false,
    error: null,
  },
  reducers: {
    signInStart: (state: UserState, _: PayloadAction<SignInPayload>) => {
      state.loading = true;
    },
    signInSuccess: (state: UserState, action:PayloadAction<UserCredentials>) => {
      state.user = action.payload;
      state.isSignedIn = true;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state: UserState, action:PayloadAction<unknown>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
} = userSlice.actions;

export default userSlice.reducer;
