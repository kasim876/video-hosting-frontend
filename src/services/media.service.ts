import {IMediaResponse} from '@/types/media.interface';

import host from '@/api/axios';

export const MediaService = {
  async upload(media: FormData, folder: string, setProgress?: (value: number) => void) {
    const response = await host.post<IMediaResponse>('/media', media, {
      params: {folder},
      headers: {'Content-Type': 'multipart/form-data'},
      onUploadProgress: progressEvent => {
        if (setProgress) {
          const progress = (progressEvent.loaded / progressEvent.total) * 100;
          setProgress(Math.ceil(progress));
        }
      },
    });

    return response.data;
  },
};
