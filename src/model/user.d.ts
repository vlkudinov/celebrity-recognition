export interface SignInPayload {
  email: string;
  password: string;
}

export interface UserCredentials {
  email: string;
  entries: string;
  id: number;
  joined: string;
  name: string;
}

export interface UserState {
  user: User | null;
  isSignedIn: boolean;
  loading: boolean;
  error: unknown | null;
}
