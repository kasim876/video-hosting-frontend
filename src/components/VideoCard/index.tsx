import cn from 'clsx';
import {FC} from 'react';
import {Link} from 'react-router-dom';

import {UserAvatar} from '@/components/UserAvatar';
import {VideoStatistics} from '@/components/VideoCard/VideoStatistics';
import {IVideo} from '@/types/video.interface';

import classes from './VideoCard.module.scss';

interface IVideoCard {
  video: IVideo;
  isSmall?: boolean;
}

export const VideoCard: FC<IVideoCard> = ({video, isSmall}) => {
  return (
    <div className={cn(classes.root, isSmall && classes.small)}>
      <div className={classes.thumbnail}>
        <img
          className={classes.thumbnail}
          src={process.env.REACT_APP_API + video.thumbnailPath}
          alt=""
        />
        {video.user.avatarPath && (
          <div className={classes.avatar}>
            <UserAvatar
              userId={video.user.id}
              userAvatar={video.user.avatarPath}
            />
          </div>
        )}
      </div>
      <div className={classes.information}>
        <div className={classes.author}>{video.user.name}</div>
        <h3 className={classes.title}>
          <Link
            to={process.env.REACT_APP_API + video.videoPath}
            aria-label={video.name}
            title={video.name}
          >
            {video.name}
          </Link>
        </h3>
        <VideoStatistics
          views={video.views}
          createdAt={video.createdAt}
        />
      </div>
    </div>
  );
};
