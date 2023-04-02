import {FC} from 'react';

import {IVideo} from '@/types/video.interface';

import Heading from '../../ui/heading/Heading';
import VideoItem from '../video-item/VideoItem';

import classes from './Catalog.module.scss';

interface ICatalog {
  title: string;
  videos: IVideo[];
}

const Catalog: FC<ICatalog> = ({title, videos}) => {
  return (
    <div className={classes.root}>
      <div className={classes.topBlock}>
        <Heading title={title} />
      </div>
      <div className={classes.catalog}>
        {videos.map(video => (
          <VideoItem
            video={video}
            key={video.id}
          />
        ))}
      </div>
    </div>
  );
};
export default Catalog;
