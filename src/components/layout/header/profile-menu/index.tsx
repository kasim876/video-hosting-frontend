import React, {FC} from 'react';

import avatarImage from '@assets/images/avatar.jpg';
import {ReactComponent as DownArrow} from '@assets/images/down-arrow.svg';

import classes from './ProfileMenu.module.scss';

const ProfileMenu: FC = () => {
  const avatar: string = avatarImage;
  const username: string = 'kasim876';

  return (
    <button className={classes.root}>
      <img
        className={classes.avatar}
        src={avatar}
        alt=""
      />
      <span className={classes.username}>{username}</span>
      <DownArrow className={classes.icon} />
    </button>
  );
};

export default ProfileMenu;
