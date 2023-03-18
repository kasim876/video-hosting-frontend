import {shuffle} from '@funboxteam/diamonds';
import {FC, useEffect, useState} from 'react';

import {VideoCard} from '@/components/VideoCard';
import {VideoService} from '@/services/video.service';
import {IVideo} from '@/types/video.interface';

import classes from './HomePage.module.scss';

export const HomePage: FC = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    VideoService.getAll().then(data => setVideos(shuffle(data)));
  }, []);

  console.log(videos);

  return (
    <div className={classes.root}>
      {videos.length === 0 ? (
        <h2>Нет видео</h2>
      ) : (
        videos.map(video => (
          <VideoCard
            video={video}
            key={video.id}
          />
        ))
      )}
    </div>
  );
};
