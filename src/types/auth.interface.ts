export interface IAuthData {
  user: {
    id: number;
    name: string;
    avatar: string | null;
    email: string;
  } | null;
  accessToken: string | null;
}