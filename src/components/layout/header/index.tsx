import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import IconsRight from '@components/layout/header/icons-right';
import Search from '@components/layout/header/search';

import {ReactComponent as Logo} from '@assets/images/logo.svg';

import {HOME_ROUTE} from '@utils/consts';

import classes from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={classes.root}>
      <Link
        to={HOME_ROUTE}
        className={classes.logoLink}
      >
        <Logo className={classes.logoIcon} />
      </Link>
      <Search />
      <IconsRight />
    </div>
  );
};

export default Header;
