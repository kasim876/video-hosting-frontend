import {shuffle} from '@funboxteam/diamonds';
import {FC, useEffect, useState} from 'react';

import {Catalog} from '@/components/Catalog';
import {VideoService} from '@/services/video.service';
import {IVideo} from '@/types/video.interface';

export const TrendingPage: FC = () => {
  const [topVideos, setTopVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    VideoService.getMostPopular().then(data => setTopVideos(data));
  }, []);

  return (
    <>
      <Catalog
        title="В тренде"
        videos={topVideos}
      />
    </>
  );
};
