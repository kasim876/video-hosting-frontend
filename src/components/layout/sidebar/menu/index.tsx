import React, {FC} from 'react';

import MenuItem from '@components/layout/sidebar/menu/MenuItem';
import {IMenu} from '@components/layout/sidebar/menu/menu.interface';

import classes from './Menu.module.scss';

const Menu: FC<IMenu> = ({title, list}) => {
  return (
    <nav className={classes.root}>
      <h3 className={classes.title}>{title}</h3>
      <ul>
        {list.map(menuItem => (
          <MenuItem
            item={menuItem}
            key={menuItem.link}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
