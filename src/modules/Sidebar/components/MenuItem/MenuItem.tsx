import cn from 'clsx';
import {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {useAuth} from '@hooks/useAuth';

import {IMenuItem} from '../../types/menu.interface';

import classes from './MenuItem.module.scss';

type Props = {
  item: IMenuItem;
};

export const MenuItem: FC<Props> = ({item}) => {
  const {user} = useAuth();

  if (!user && item.link === '/my-channel') {
    return null;
  }

  return (
    <li className={classes.root}>
      <NavLink
        to={item.link === '/my-channel' ? `/channel/${user?.id}` : item.link}
        className={({isActive}) =>
          cn(classes.link, isActive && classes.linkActive)
        }
        end
      >
        <span
          className={cn(item.icon && classes.icon, item.image && classes.image)}
        >
          {item.icon && <item.icon />}
          {item.image && (
            <img
              src={item.image}
              width={40}
              height={40}
              alt={item.title}
            />
          )}
        </span>
        <b className={classes.title}>{item.title}</b>
      </NavLink>
    </li>
  );
};
