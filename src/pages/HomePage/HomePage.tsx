import {shuffle} from '@funboxteam/diamonds';
import {FC, useEffect, useState} from 'react';

import {Catalog} from '@/components/Catalog';
import {VideoService} from '@/services/video.service';
import {IVideo} from '@/types/video.interface';

export const HomePage: FC = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    VideoService.getAll().then(data => setVideos(shuffle(data)));
  }, []);

  return (
    <>
      <Catalog
        title="Рекомендации"
        videos={videos}
      />
    </>
  );
};
