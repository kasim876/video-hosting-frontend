import {IUser} from '@/types/user.interface';

import host from '@/api/axios';

const UserService = {
  async getOne(id: number) {
    const response = await host.get<IUser>(`user/${id}`);

    return response.data;
  },
};

export default UserService;
