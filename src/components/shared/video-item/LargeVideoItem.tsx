import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';

import {IVideo} from '@/types/video.interface';

import UserAvatar from '../user-avatar/UserAvatar';

import classes from './VideoItem.module.scss';
import VideoStatistics from './VideoStatistics';

interface ILargeVideoItem {
  video: IVideo;
}

const LargeVideoItem: FC<ILargeVideoItem> = ({video}) => {
  return (
    <div className={classNames(classes.root, classes.largeItem)}>
      <div className={classes.thumbnail}>
        {video.thumbnailPath && (
          <Image
            src={process.env.REACT_APP_API + video.thumbnailPath}
            alt={video.name}
            className={classes.bgImage}
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            priority
          />
        )}
        <div className={classes.information}>
          <h3 className={classes.title}>
            <Link
              href={'/v/' + video.id}
              aria-label={video.name}
              title={video.name}
            >
              {video.name}
            </Link>
          </h3>
          <UserAvatar user={video.user} />
          <div className={classes.author}>{video.user.name}</div>
          <VideoStatistics
            createdAt={video.createdAt}
            views={video.views}
          />
        </div>
      </div>
    </div>
  );
};

export default LargeVideoItem;
