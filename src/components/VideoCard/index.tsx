import {FC} from 'react';
import {Link} from 'react-router-dom';

import {formatNumberToK} from '@/utils/format-number-to-k';

import classes from './VideoCard.module.scss';

type Props = {
  avatar: string;
  title: string;
  name: string;
  poster: string;
  link: string;
  views: number;
  date: string;
};

export const VideoCard: FC<Props> = ({
  avatar,
  title,
  poster,
  link,
  name,
  views,
  date,
}) => {
  return (
    <Link
      className={classes.root}
      aria-label={title}
      title={title}
      to={link}
    >
      <img
        className={classes.img}
        src={poster}
        alt=""
      />
      <div className={classes.details}>
        <h3 className={classes.title}>{title}</h3>
        <div className={classes.author}>
          <img
            className={classes.avatar}
            src={avatar}
            alt=""
          />
          <span className={classes.name}>{name}</span>
        </div>
        <ul className={classes.metadata}>
          <li className={classes.metadataItem}>
            {formatNumberToK(views)} просмотров
          </li>
          <li className={classes.metadataItem}>{date} назад</li>
        </ul>
      </div>
    </Link>
  );
};
