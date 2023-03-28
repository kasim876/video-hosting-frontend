import {$host} from '@/api/axios';
import {IUser} from '@/types/user.interface';

const UserService = {
  async getUser(id: number) {
    const response = await $host.get<IUser>(`/user/${id}`);

    return response.data;
  },
};

export default UserService;
