import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';
import {FC} from 'react';
import {AiFillEye, AiFillHeart} from 'react-icons/ai';
import {HiCalendar} from 'react-icons/hi';

import ChannelInfo from '@/components/shared/channel-info/ChannelInfo';
import SubscribeButton from '@/components/ui/subscribe-button/SubscribeButton';

import {formatNumberToK} from '@/utils/format-number-to-k';

import {IVideo} from '@/types/video.interface';

import classes from './VideoDetail.module.scss';

interface IVideoDetail {
  video: IVideo;
}

dayjs.extend(relativeTime);
dayjs.locale('ru');

const VideoDetail: FC<IVideoDetail> = ({video}) => {
  return (
    <div className={classes.detail}>
      <div>
        <ChannelInfo user={video.user} />
        <h1>{video.name}</h1>
        <article className={classes.article}>{video.description}</article>
      </div>
      <div>
        <div className={classes.wrapperButton}>
          <SubscribeButton />
          <button className={classes.likeButton}>
            <AiFillHeart />
          </button>
        </div>
        <div className={classes.numberInfo}>
          <div>
            <AiFillEye />
            <span>{formatNumberToK(video.views)} просмотров</span>
          </div>
          <div>
            <AiFillHeart />
            <span>{formatNumberToK(video.likes)} нравится</span>
          </div>
          <div>
            <HiCalendar />
            <span>{dayjs(new Date(video.createdAt)).fromNow()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
