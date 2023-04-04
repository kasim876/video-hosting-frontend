import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';
import {HiOutlineUserCircle} from 'react-icons/hi';

import {IUser} from '@/types/user.interface';

import classes from './UserAvatar.module.scss';

interface IUserAvatar {
  user: IUser;
}
const UserAvatar: FC<IUserAvatar> = ({user}) => {
  return (
    <Link href={`/c/${user.id}`}>
      {user.avatarPath ? (
        <span className={classes.root}>
          <Image
            src={process.env.REACT_APP_API + user.avatarPath}
            alt=""
            width={40}
            height={40}
          />
        </span>
      ) : (
        <HiOutlineUserCircle className={classes.icon} />
      )}
    </Link>
  );
};

export default UserAvatar;
