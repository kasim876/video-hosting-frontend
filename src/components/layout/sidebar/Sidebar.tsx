import {FC} from 'react';

import useAuth from '@/hooks/useAuth';

import classes from './Sidebar.module.scss';
import Menu from './menu/Menu';
import {categories, menu} from './menu/menu.data';

const Sidebar: FC = () => {
  const {user} = useAuth();

  return (
    <aside className={classes.root}>
      <Menu list={menu} />
      <Menu list={categories} />
    </aside>
  );
};

export default Sidebar;
