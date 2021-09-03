export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserCredentials {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  entries: string;
  joined: string;
}

export interface UserState {
  credentials: UserCredentials | null;
  isSignedIn: boolean;
  loading: boolean;
  error: unknown | null;
}

export interface RootState {
  user: UserState
}
