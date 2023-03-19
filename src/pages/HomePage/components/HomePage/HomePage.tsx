import {shuffle} from '@funboxteam/diamonds';
import {FC, useEffect, useState} from 'react';

import {Catalog} from '@/components/Catalog';
import {VideoCard} from '@/components/VideoCard';
import {VideoService} from '@/services/video.service';
import {IVideo} from '@/types/video.interface';

import classes from './HomePage.module.scss';

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
