import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';
import React, {FC} from 'react';

import {formatNumberToK} from '@utils/format-number-to-k';

import classes from './VideoCard.module.scss';

dayjs.extend(relativeTime);
dayjs.locale('ru');

interface IVideoStatistics {
  views: number;
  createdAt: string;
}

export const VideoStatistics: FC<IVideoStatistics> = ({views, createdAt}) => {
  return (
    <div className={classes.metadata}>
      <div className={classes.metadataItem}>
        {formatNumberToK(views)} просмотров
      </div>
      <div className={classes.metadataItem}>
        {dayjs(new Date(createdAt)).fromNow()}
      </div>
    </div>
  );
};
