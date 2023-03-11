import cn from 'clsx';
import {FC} from 'react';
import {Link} from 'react-router-dom';

import {UserAvatar} from '@components/UserAvatar';
import {VideoStatistics} from '@components/VideoCard/VideoStatistics';

import {IVideo} from '@/types/video';

import classes from './VideoCard.module.scss';

interface IVideoCard {
  video: IVideo;
  isSmall?: boolean;
}

export const VideoCard: FC<IVideoCard> = ({video, isSmall}) => {
  /* TODO: Удалить функцию */
  const testViews = () => {
    const rand = 1 + Math.random() * (12000000 - 1);
    return Math.round(rand);
  };

  return (
    <div className={cn(classes.root, isSmall && classes.small)}>
      <div className={classes.thumbnail}>
        <img
          className={classes.thumbnail}
          src={process.env.REACT_APP_API + video.thumbnailName}
          alt=""
        />
        {video.userAvatar && (
          <div className={classes.avatar}>
            <UserAvatar
              userId={video.userId}
              userAvatar={video.userAvatar}
            />
          </div>
        )}
      </div>
      <div className={classes.information}>
        <div className={classes.author}>{video.userName}</div>
        <h3 className={classes.title}>
          <Link
            to={process.env.REACT_APP_API + video.videoName}
            aria-label={video.title}
            title={video.title}
          >
            {video.title}
          </Link>
        </h3>
        <VideoStatistics
          views={testViews()}
          createdAt={video.createdAt}
        />
      </div>
    </div>
  );
};
