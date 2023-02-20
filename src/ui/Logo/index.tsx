import cn from 'clsx';
import {FC, LinkHTMLAttributes} from 'react';
import {Link} from 'react-router-dom';

import logo from '@assets/images/logo.svg';

import {HOME_ROUTE} from '@/consts';

import classes from './Logo.module.scss';

export const Logo: FC<LinkHTMLAttributes<HTMLLinkElement>> = ({className}) => {
  return (
    <Link
      to={HOME_ROUTE}
      className={cn(classes.root, className)}
    >
      <img
        src={logo}
        alt="Rutube"
        className={classes.img}
      />
    </Link>
  );
};
