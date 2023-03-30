import {FC} from 'react';

import classes from './Menu.module.scss';
import MenuItem from './MenuItem';
import {IMenu} from './menu.interface';

const Menu: FC<IMenu> = ({list, title}) => {
  return (
    <nav className={classes.root}>
      <h3 className={classes.title}>{title}</h3>
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
