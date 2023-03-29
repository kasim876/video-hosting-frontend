import {IAuthData} from '@/types/auth.interface';

import host from '@/api/axios';

const AuthService = {
  async register(email: string, name: string, password: string) {
    const response = await host.post<IAuthData>('/auth/register', {
      email,
      name,
      password,
    });

    return response.data;
  },

  async login(email: string, password: string) {
    const response = await host.post<IAuthData>('/auth/login', {
      email,
      password,
    });

    return response.data;
  },
};

export default AuthService;
