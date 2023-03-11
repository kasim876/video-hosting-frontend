import {FC} from 'react';
import {HiOutlineUserCircle} from 'react-icons/hi';

import {useAuth} from '@hooks/useAuth';

import classes from './Profile.module.scss';

export const Profile: FC = () => {
  const {user} = useAuth();

  return (
    <button className={classes.root}>
      {user?.avatar ? (
        <img
          src={process.env.REACT_APP_API + user?.avatar}
          className={classes.avatar}
          alt={'Пользователь ' + user?.name}
        />
      ) : (
        <HiOutlineUserCircle className={classes.icon} />
      )}
      <b>{user?.name}</b>
    </button>
  );
};
