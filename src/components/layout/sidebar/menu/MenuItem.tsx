import cn from 'clsx';
import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {IMenuItem} from '@components/layout/sidebar/menu/menu.interface';

import classes from './Menu.module.scss';

const MenuItem: FC<{item: IMenuItem}> = ({item}) => {
  return (
    <li className={classes.item}>
      <NavLink
        to={item.link}
        className={({isActive}) =>
          cn(classes.link, isActive && classes.linkActive)
        }
      >
        <span
          className={cn(
            item.icon && classes.iconWrapper,
            item.image && classes.imageWrapper,
          )}
        >
          {item.icon && <item.icon className={classes.icon} />}
          {item.image && (
            <img
              src={item.image}
              width={40}
              height={40}
              alt={item.title}
            />
          )}
        </span>
        <b className={classes.itemTitle}>{item.title}</b>
      </NavLink>
    </li>
  );
};

export default MenuItem;
