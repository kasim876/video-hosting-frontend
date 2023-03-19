import {FC} from 'react';

import {IVideo} from '@/types/video.interface';
import {Heading} from '@/ui/Heading';

import {VideoCard} from '../VideoCard';

import classes from './Catalog.module.scss';

interface ICatalog {
  title: string;
  videos: IVideo[];
}

export const Catalog: FC<ICatalog> = ({title, videos}) => {
  return (
    <div className={classes.root}>
      <div className={classes.topBlock}>
        <Heading title={title} />
      </div>
      <div className={classes.catalog}>
        {videos.map(video => (
          <VideoCard
            video={video}
            key={video.id}
          />
        ))}
      </div>
    </div>
  );
};
