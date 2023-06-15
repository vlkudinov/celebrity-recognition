export interface SignInPayload {
  email?: string;
  password?: string;
}

export interface SignUpPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UpdateProfilePayload {
  firstName: string;
  lastName: string;
  age: number;
}

export interface UserId {
  userId: number;
}

export interface UserAuthResponse extends UserId{
  success: boolean;
  token: string;
}

export interface UserCredentials {
  firstName: string;
  lastName: string;
  email: string;
  entries: string;
  joined: string;
  age: number;
}

export interface UserState {
  id: number | null
  credentials: UserCredentials | null;
  isSignedIn: boolean;
  isProfileOpened: boolean;
  loading: boolean;
  error: Error | null;
}
