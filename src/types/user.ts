export interface IUserState {
  user: {
    id: number;
    name: string;
    avatarPath: string | null;
    email: string;
  } | null;
  accessToken: string | null;
}
