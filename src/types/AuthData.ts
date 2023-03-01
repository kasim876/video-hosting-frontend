export interface IAuthData {
  user: {
    id: number;
    username: string;
    avatarPath: string;
    email: string;
  } | null;
  accessToken: string;
}
