import {IAuthData} from '@/types/AuthData';

export const useAuth = (): IAuthData => ({
  user: null,
  accessToken: '',
});
