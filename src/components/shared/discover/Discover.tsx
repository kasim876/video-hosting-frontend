import {FC} from 'react';

import {IVideo} from '@/types/video.interface';

import LargeVideoItem from '../video-item/LargeVideoItem';

import classes from './Discover.module.scss';

interface IDiscover {
  topVideo: IVideo;
  randomVideo: IVideo;
}

const Discover: FC<IDiscover> = ({randomVideo, topVideo}) => {
  return (
    <div className={classes.root}>
      <div className={classes.topVideo}>
        <LargeVideoItem video={topVideo} />
      </div>
      <div className={classes.randomVideo}>
        <LargeVideoItem video={randomVideo} />
      </div>
    </div>
  );
};

export default Discover;
