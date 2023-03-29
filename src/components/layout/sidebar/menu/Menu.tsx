import {FC} from 'react';

import classes from './Menu.module.scss';
import MenuItem from './MenuItem';
import {IMenu} from './menu.interface';

const Menu: FC<IMenu> = ({list}) => {
  return (
    <nav className={classes.root}>
      <ul className={classes.list}>
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
