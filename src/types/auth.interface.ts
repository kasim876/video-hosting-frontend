export interface IAuthFields {
  email: string;
  password: string;
  name: string;
}

export interface IAuthData {
  user: {
    id: number;
    name: string;
    email: string;
  } | null;
  accessToken: string | null;
}
