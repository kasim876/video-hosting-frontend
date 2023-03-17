export interface IAuthFields {
  email: string;
  name: string;
  password: string;
}

export interface IAuthData {
  user: {
    id: number;
    name: string;
    email: string;
  } | null;
  accessToken: string | null;
}

export interface IAuthState extends IAuthData {
  loading: boolean;
}
