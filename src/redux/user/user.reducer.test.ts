import { AnyAction } from '@reduxjs/toolkit';
import userReducer, {
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
  initialState,
} from 'src/redux/user/user.reducer';
import { signUpMock, updateProfileMock, userCredentialsMock, userAuthMock } from 'src/__fixtures__/reducers/user';

describe('user reducer', () => {
  test('should return the initial state', () => {
    expect(userReducer(undefined, {} as AnyAction)).toEqual(initialState);
  });
  describe('user sign in', () => {
    test('should handle user sign in start', () => {
      const { loading, isSignedIn, error } = userReducer(initialState, signInStart());
      expect(loading).toBe(true);
      expect(isSignedIn).toBe(false);
      expect(error).toBe(null);
    });

    test('should handle user sign in success', () => {
      const { loading, isSignedIn, id } = userReducer(initialState, signInSuccess(userAuthMock));
      expect(loading).toBe(false);
      expect(isSignedIn).toBe(true);
      expect(id).toBe(1);
    });

    test('should handle user sign in failure', () => {
      const { loading, error } = userReducer(initialState, signInFailure(new Error('error')));
      expect(loading).toBe(false);
      expect(error instanceof Error).toBeTruthy();
    });
  });
  describe('user sign up', () => {
    test('should handle user sign up start', () => {
      const { loading, error } = userReducer(initialState, signUpStart(signUpMock));
      expect(loading).toBe(true);
      expect(error).toBe(null);
    });

    test('should handle user sign up success', () => {
      const { loading } = userReducer(initialState, signUpSuccess(userAuthMock));
      expect(loading).toBe(false);
    });
    test('should handle user sign up failure', () => {
      const { loading, error } = userReducer(initialState, signUpFailure(new Error()));
      expect(loading).toBe(false);
      expect(error instanceof Error).toBeTruthy();
    });
  });
  describe('user sign out', () => {
    test('should handle user sign out start', () => {
      const { loading, error } = userReducer(initialState, signOutStart());
      expect(loading).toBe(true);
      expect(error).toBe(null);
    });
    test('should handle user sign out success', () => {
      const { loading, isSignedIn, credentials } = userReducer(initialState, signOutSuccess({ message: 'Goodbye' }));
      expect(loading).toBe(false);
      expect(isSignedIn).toBe(false);
      expect(credentials).toBe(null);
    });
    test('should handle user sign out failure', () => {
      const { loading, error } = userReducer(initialState, signOutFailure(new Error()));
      expect(loading).toBe(false);
      expect(error instanceof Error).toBeTruthy();
    });
  });
  describe('user profile', () => {
    test('should handle profile fetch start', () => {
      const { loading, error } = userReducer(initialState, getProfileStart());
      expect(loading).toBe(true);
      expect(error).toBe(null);
    });
    test('should handle profile fetch success', () => {
      const profilePayload = { credentials: userCredentialsMock, message: 'profile loaded' };
      const { loading, credentials } = userReducer(initialState, getProfileSuccess(profilePayload));
      expect(loading).toBe(false);
      expect(profilePayload.credentials).toEqual(credentials);
    });
    test('should handle profile fetch failure', () => {
      const { loading, error } = userReducer(initialState, getProfileFailure(new Error()));
      expect(loading).toBe(false);
      expect(error instanceof Error).toBeTruthy();
    });
    test('should handle profile update start', () => {
      const { loading, error } = userReducer(initialState, updateProfileStart(updateProfileMock));
      expect(loading).toBe(true);
      expect(error).toBe(null);
    });
    test('should handle profile update success', () => {
      const updateProfilePayload = { userId: 1, message: 'success' };
      const { loading } = userReducer(initialState, updateProfileSuccess(updateProfilePayload));
      expect(loading).toBe(false);
    });
    test('should handle profile update failure', () => {
      const { loading, error } = userReducer(initialState, updateProfileFailure(new Error()));
      expect(loading).toBe(false);
      expect(error instanceof Error).toBeTruthy();
    });
    test('profile modal should be opened', () => {
      const { isProfileOpened } = userReducer(initialState, setProfileOpen(true));
      expect(isProfileOpened).toBe(true);
    });
    test('profile modal should be closed', () => {
      const { isProfileOpened } = userReducer(initialState, setProfileOpen(false));
      expect(isProfileOpened).toBe(false);
    });
  });
});
