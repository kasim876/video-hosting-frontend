import {FC} from 'react';

import {IMenu} from '../../types/menu.interface';
import {MenuItem} from '../MenuItem/MenuItem';

import classes from './Menu.module.scss';

export const Menu: FC<IMenu> = ({title, list}) => {
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
