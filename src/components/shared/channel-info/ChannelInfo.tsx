import {FC} from 'react';

import {formatNumberToK} from '@/utils/format-number-to-k';

import {IUser} from '@/types/user.interface';

import UserAvatar from '../user-avatar/UserAvatar';

import classes from './ChannelInfo.module.scss';

interface IChannelInfo {
  user: IUser;
  message?: string;
}

const ChannelInfo: FC<IChannelInfo> = ({user, message}) => {
  return (
    <div className={classes.root}>
      <UserAvatar user={user} />
      <div>
        <div className={classes.author}>{user.name}</div>
        <div className={classes.info}>{message || formatNumberToK(user.subscribersCount) + ' подписчиков'}</div>
      </div>
    </div>
  );
};

export default ChannelInfo;
