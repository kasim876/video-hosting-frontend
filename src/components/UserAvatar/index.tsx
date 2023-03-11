import {FC} from 'react';
import {Link} from 'react-router-dom';

import classes from './UserAvatar.module.scss';

interface IUserAvatar {
  userId: number;
  userAvatar: string;
}

export const UserAvatar: FC<IUserAvatar> = ({userId, userAvatar}) => {
  return (
    <Link to={`/c/${userId}`}>
      <span className={classes.root}>
        <img
          src={process.env.REACT_APP_API + userAvatar}
          alt=""
          width={40}
          height={40}
        />
      </span>
    </Link>
  );
};
