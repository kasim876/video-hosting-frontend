import {FC, useState} from 'react';

import classes from './Header.module.scss';
import RightIcons from './right-icons/RightIcons';
import Search from './search/Search';

const Header: FC = () => {
  const [value, setValue] = useState('');

  return (
    <header className={classes.root}>
      <Search />
      <RightIcons />
    </header>
  );
};

export default Header;
