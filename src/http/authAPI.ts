import {IAuthData} from '@/types/auth.interface';

import {$host} from './axios';

export const authAPI = {
  async login(email: string, password: string) {
    const response = await $host.post<IAuthData>('/auth/login', {
      email,
      password,
    });

    return response.data;
  },

  async registration(email: string, password: string, username: string) {
    const response = await $host.post<IAuthData>('/auth/register', {
      email,
      password,
      username,
    });

    return response.data;
  },
};
