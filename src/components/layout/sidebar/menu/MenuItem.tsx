import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {FC} from 'react';

import useAuth from '@/hooks/useAuth';

import classes from './Menu.module.scss';
import {IMenuItem} from './menu.interface';

const MenuItem: FC<{item: IMenuItem}> = ({item}) => {
  const {user} = useAuth();
  const {asPath} = useRouter();

  if (!user) {
    if (item.link === '/my-channel') return null;
  }

  const computedLink = item.link === '/my-channel' ? `/c/${user.id}` : item.link;

  return (
    <li className={classes.item}>
      <Link
        href={computedLink}
        className={classNames(asPath === computedLink && classes.active, classes.link)}
      >
        <span className={item.icon ? classes.icon : classes.image}>
          {item.icon && <item.icon />}
          {item.image && (
            <Image
              src={item.image}
              width={40}
              height={40}
              alt={item.title}
            />
          )}
        </span>
        <b className={classes.name}>{item.title}</b>
      </Link>
    </li>
  );
};

export default MenuItem;
