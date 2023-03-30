import {FC} from 'react';
import {HiOutlineUserCircle} from 'react-icons/hi';

import useAppDispatch from '@/hooks/useAppDispatch';
import useAuth from '@/hooks/useAuth';

import {useGetProfileQuery} from '@/store/api';
import {logout as logoutAction} from '@/store/auth/auth.actions';

import classes from './Profile.module.scss';

const Profile: FC = () => {
  const dispatch = useAppDispatch();

  const {user} = useAuth();

  const {data} = useGetProfileQuery(null, {
    skip: !user,
  });

  return (
    <button
      className={classes.root}
      onClick={() => dispatch(logoutAction(null))}
    >
      {data?.avatarPath ? (
        <img
          src={'http://localhost:8080/' + data?.avatarPath}
          className={classes.avatar}
          alt={'Пользователь ' + user?.name}
        />
      ) : (
        <HiOutlineUserCircle className={classes.icon} />
      )}
      <b>{data?.name}</b>
    </button>
  );
};

export default Profile;