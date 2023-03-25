import {FC} from 'react';

import {IUser} from '@/types/user.interface';

import {UserAvatar} from '../UserAvatar';

import classes from './ChannelInfo.module.scss';

interface IChannelInfo {
  user: IUser;
  descr: string;
}

export const ChannelInfo: FC<IChannelInfo> = ({user, descr}) => {
  return (
    <div className={classes.root}>
      <UserAvatar
        userAvatar={user.avatarPath}
        userId={user.id}
      />
      <div>
        <div className={classes.author}>{user.name}</div>
        <div className={classes.info}>{descr}</div>
      </div>
    </div>
  );
};
