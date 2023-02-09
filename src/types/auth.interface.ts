export interface IAuthData {
  user: {
    id: number;
    email: string;
    username: string;
  } | null;
  accessToken: string;
}
