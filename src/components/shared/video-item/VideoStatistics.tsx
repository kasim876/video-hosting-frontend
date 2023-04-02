import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';
import {FC} from 'react';

import {formatNumberToK} from '@/utils/format-number-to-k';

import classes from './VideoItem.module.scss';

interface IVideoStatistics {
  views: number;
  createdAt: string;
}

dayjs.extend(relativeTime);
dayjs.locale('ru');

const VideoStatistics: FC<IVideoStatistics> = ({views, createdAt}) => {
  return (
    <div className={classes.metadata}>
      <div
        className={classes.metadataItem}
        aria-label={`${views} просмотров`}
      >
        {formatNumberToK(views)} просмотров
      </div>
      <div className={classes.metadataItem}>{dayjs(new Date(createdAt)).fromNow()}</div>
    </div>
  );
};
export default VideoStatistics;
