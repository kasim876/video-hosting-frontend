import jwtDecode from 'jwt-decode';

import {host} from '@/api';

export const login = async (email: string, password: string) => {
  const {data} = await host.post('user/login', {email, password});

  localStorage.setItem('token', data.token);

  return jwtDecode(data.token);
};

export const registration = async (
  name: string,
  email: string,
  password: string,
) => {
  const {data} = await host.post('user/register', {name, email, password});

  localStorage.setItem('token', data.token);

  return jwtDecode(data.token);
};
