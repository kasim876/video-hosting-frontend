import {FC} from 'react';
import {HiOutlineUserCircle} from 'react-icons/hi';

import classes from './Profile.module.scss';

type Props = {
  username: string;
  avatarPath: string;
};

export const Profile: FC<Props> = ({username, avatarPath}) => {
  return (
    <button className={classes.root}>
      {avatarPath ? (
        <img
          src={avatarPath}
          className={classes.avatar}
          alt={'Пользователь ' + username}
        />
      ) : (
        <HiOutlineUserCircle className={classes.icon} />
      )}
      <b>{username}</b>
    </button>
  );
};
