import {FC} from 'react';

import {useAuth} from '@hooks/useAuth';

import {ButtonOutlined} from '@ui/ButtonOutlined';
import {ButtonSolid} from '@ui/ButtonSolid';

import {Profile} from '../Profile/Profile';

import classes from './RightIcons.module.scss';

export const RightIcons: FC = () => {
  const {user} = useAuth();

  if (!user) {
    return (
      <div className={classes.root}>
        <ButtonOutlined className={classes.button}>Войти</ButtonOutlined>
        <ButtonSolid className={classes.button}>Регистрация</ButtonSolid>
      </div>
    );
  }

  return (
    <Profile
      username={user.username}
      avatarPath={user.avatarPath}
    />
  );
};
