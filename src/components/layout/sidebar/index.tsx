import React, {FC} from 'react';

import Menu from '@components/layout/sidebar/menu';
import {menu, subscriptions} from '@components/layout/sidebar/menu/menu.data';

import classes from './Sidebar.module.scss';

const Sidebar: FC = () => {
  return (
    <aside className={classes.root}>
      <Menu
        title="меню"
        list={menu}
      />
      <Menu
        title="подписки"
        list={subscriptions}
      />
    </aside>
  );
};

export default Sidebar;
