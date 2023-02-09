import {IAuthData} from '@/types/auth.interface';

export const useAuth = (): IAuthData => ({
  user: {
    id: Date.now(),
    email: 'max.lukashenko2017@gmail.com',
    username: 'kasim876',
  },
  accessToken: '',
});
