import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';

import {IVideo} from '@/types/video.interface';

import UserAvatar from '../user-avatar/UserAvatar';

import classes from './VideoItem.module.scss';
import VideoStatistics from './VideoStatistics';

interface IVideoCard {
  video: IVideo;
  isSmall?: boolean;
}

const VideoItem: FC<IVideoCard> = ({video, isSmall}) => {
  return (
    <div className={classNames(classes.root, isSmall && classes.small)}>
      <div className={classes.thumbnail}>
        <Image
          className={classes.thumbnail}
          src={process.env.REACT_APP_API + video.thumbnailPath}
          alt=""
          width={246}
          height={138}
        />
        {video.user.avatarPath && (
          <div className={classes.avatar}>
            <UserAvatar user={video.user} />
          </div>
        )}
      </div>
      <div className={classes.information}>
        <div className={classes.author}>{video.user.name}</div>
        <h3 className={classes.title}>
          <Link
            href={'/v/' + video.id}
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

export default VideoItem;
