import {FC} from 'react';
import {HiOutlineUserCircle} from 'react-icons/hi';

import useAppDispatch from '@/hooks/useAppDispatch';
import useAuth from '@/hooks/useAuth';

import UserAvatar from '@/components/shared/user-avatar/UserAvatar';

import {useGetProfileQuery} from '@/store/api/api';
import {logout as logoutAction} from '@/store/auth/auth.actions';

import classes from './Profile.module.scss';

const Profile: FC = () => {
  const dispatch = useAppDispatch();

  const {user} = useAuth();

  const {data: profile} = useGetProfileQuery(null, {
    skip: !user,
  });

  return (
    <button
      className={classes.root}
      onClick={() => dispatch(logoutAction(null))}
    >
      {profile?.avatarPath ? (
        <div className={classes.avatar}>
          <UserAvatar user={profile} />
        </div>
      ) : (
        <HiOutlineUserCircle className={classes.icon} />
      )}
      <b>{profile?.name}</b>
    </button>
  );
};

export default Profile;
