import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';
import {GoChevronDown, GoChevronUp} from 'react-icons/go';

import useAppDispatch from '@/hooks/useAppDispatch';
import useAuth from '@/hooks/useAuth';
import useOutside from '@/hooks/useOutside';

import UserAvatar from '@/components/shared/user-avatar/UserAvatar';

import {useGetProfileQuery} from '@/store/api/api';
import {logout as logoutAction} from '@/store/auth/auth.actions';

import classes from './Profile.module.scss';

const Profile: FC = () => {
  const dispatch = useAppDispatch();

  const {user} = useAuth();

  const {data, isLoading} = useGetProfileQuery(null, {
    skip: !user,
  });

  const {isShow, ref, setIsShow} = useOutside(false);

  if (isLoading) return null;

  return (
    <div ref={ref}>
      <button
        onClick={() => setIsShow(!isShow)}
        className={classes.button}
      >
        <UserAvatar user={data} />
        <span className={classes.name}>{data.name}</span>
        {isShow ? <GoChevronUp /> : <GoChevronDown />}
      </button>

      {isShow && (
        <div className={classes.menu}>
          <ul>
            <li>
              <Link href={`/c/${user.id}`}>Мой канал</Link>
            </li>
            <li>
              <Link href={`/studio`}>Творческая студия</Link>
            </li>
            <li>
              <button onClick={() => dispatch(logoutAction(null))}>Выйти</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );

  // return (
  //   <button
  //     className={classes.root}
  //     onClick={() => dispatch(logoutAction(null))}
  //   >
  //     {profile?.avatarPath ? (
  //       <div className={classes.avatar}>
  //         <UserAvatar user={profile} />
  //       </div>
  //     ) : (
  //       <HiOutlineUserCircle className={classes.icon} />
  //     )}
  //     <b>{profile?.name}</b>
  //   </button>
  // );
};

export default Profile;
