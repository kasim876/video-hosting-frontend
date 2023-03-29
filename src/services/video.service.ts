import {IVideo} from '@/types/video.interface';

import host from '@/api/axios';

const VideoService = {
  async getAll() {
    const response = await host.get<IVideo[]>('video');

    return response.data;
  },

  async getOne(id: number) {
    const response = await host.get<IVideo>(`video/by-id/${id}`);

    return response.data;
  },

  async getMostPopular() {
    const response = await host.get<IVideo[]>('video/most-popular');

    return response.data;
  },
};

export default VideoService;
