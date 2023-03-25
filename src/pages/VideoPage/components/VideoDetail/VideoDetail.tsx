import dayjs from 'dayjs';
import {FC} from 'react';
import {AiFillEye, AiFillHeart} from 'react-icons/ai';
import {HiCalendar} from 'react-icons/hi';

import ChannelInfo from '@/components/ChannelInfo';
import {IUser} from '@/types/user.interface';
import {IVideo} from '@/types/video.interface';
import SubscribeButton from '@/ui/SubscribeButton';
import {formatNumberToK} from '@/utils/format-number-to-k';

import classes from './VideoDetail.module.scss';

interface IVideoDetail {
  video: IVideo;
}

const VideoDetail: FC<IVideoDetail> = ({video}) => {
  return (
    <div className={classes.detail}>
      <div>
        <ChannelInfo
          user={video.user}
          descr={`${video.user.subscribersCount} подписчиков`}
        />
        <h1>{video.name}</h1>
        <article className={classes.article}>
          Это была однозначно самая долгая и самая сложная 1000км за всю историю проекта! Немного проспойлерю, дорога
          заняла у нас целых 5 дней! Но ее вы увидите уже в следующем выпуске, а пока зацените, какие ИНОМАРКИ нам
          удалось найти в Нижнем Новгороде по цене 30.000 рублей! К слову, с ними у нас сразу начались проблемы, поэтому
          этот выпуск будет очень веселым. Приятного просмотра!
        </article>
      </div>
      <div>
        <div className={classes.wrapperButton}>
          <SubscribeButton />
          <button className={classes.likeButton}>
            <AiFillHeart /> Лайк
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
