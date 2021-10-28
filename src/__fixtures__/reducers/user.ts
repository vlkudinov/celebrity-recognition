import { SignUpPayload, UpdateProfilePayload, UserAuthResponse, UserCredentials } from 'src/model';

const signUpMock : SignUpPayload = {
  email: 'test@gmail.com',
  password: 'password',
  firstName: 'super',
  lastName: 'user',
};

const updateProfileMock: UpdateProfilePayload = {
  firstName: 'John',
  lastName: 'Smith',
  age: 12,
};

const userCredentialsMock : UserCredentials = {
  firstName: 'super',
  lastName: 'user',
  email: 'test@gmail.com',
  entries: '0',
  joined: '2018-01-01T00:00:00.000Z',
  age: 20,
};

const userAuthMock : UserAuthResponse = {
  success: true,
  token: 'token',
  userId: 1,
};

export {
  signUpMock, updateProfileMock, userCredentialsMock, userAuthMock,
};
