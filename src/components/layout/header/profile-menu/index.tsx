import React, {FC} from 'react';

import avatarImage from '@assets/images/avatar.jpg';
import {ReactComponent as DownArrow} from '@assets/images/down-arrow.svg';

import {useAuth} from '@/hooks/useAuth';

import classes from './ProfileMenu.module.scss';

const ProfileMenu: FC = () => {
  const {user} = useAuth();
  const avatar = avatarImage;

  return (
    <button className={classes.root}>
      <img
        className={classes.avatar}
        src={avatar}
        alt=""
      />
      <span className={classes.username}>{user?.username}</span>
      <DownArrow className={classes.icon} />
    </button>
  );
};

export default ProfileMenu;
