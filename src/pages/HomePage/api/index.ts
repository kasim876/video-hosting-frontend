import {host} from '@/api';

export const fetchVideos = async () => {
  const {data} = await host.get('/video');

  return data;
};
