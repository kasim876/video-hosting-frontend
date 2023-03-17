import {$host} from '@api/axios';

import {IAuthData} from '@/types/auth.interface';

export const AuthService = {
  async register(email: string, name: string, password: string) {
    const response = await $host.post<IAuthData>('/auth/register', {
      email,
      name,
      password,
    });

    return response.data;
  },

  async login(email: string, password: string) {
    const response = await $host.post<IAuthData>('/auth/login', {
      email,
      password,
    });

    return response.data;
  },
};
