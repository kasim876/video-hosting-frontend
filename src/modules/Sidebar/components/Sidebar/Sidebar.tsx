import {FC} from 'react';

import {useAuth} from '@hooks/useAuth';

import {menu, subscriptions} from '../../config/menu.data';
import {Menu} from '../Menu/Menu';

import classes from './Sidebar.module.scss';

export const Sidebar: FC = () => {
  const {user} = useAuth();

  return (
    <aside className={classes.root}>
      <Menu
        title="меню"
        list={menu}
      />
      {user && (
        <Menu
          title="подписки"
          list={subscriptions}
        />
      )}
    </aside>
  );
};
