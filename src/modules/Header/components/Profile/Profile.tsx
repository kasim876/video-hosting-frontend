import {FC} from 'react';
import {HiOutlineUserCircle} from 'react-icons/hi';

import {useAuth} from '@hooks/useAuth';

import classes from './Profile.module.scss';

export const Profile: FC = () => {
  const {user} = useAuth();

  return (
    <button className={classes.root}>
      {/* <img
          src={process.env.REACT_APP_API}
          className={classes.avatar}
          alt={'Пользователь ' + user?.name}
        /> */}
      {/* TODO: заменить на вывод имени с аватаром */}
      <HiOutlineUserCircle className={classes.icon} />
      <b>
        Профиль с email <i>{user?.email}</i> получен
      </b>
    </button>
  );
};
