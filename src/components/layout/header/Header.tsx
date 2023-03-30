import {FC, useState} from 'react';

import classes from './Header.module.scss';
import RightIcons from './right-icons/RightIcons';
import SearchForm from './search-form/SearchForm';

const Header: FC = () => {
  const [value, setValue] = useState('');

  return (
    <header className={classes.root}>
      <SearchForm />
      <RightIcons />
    </header>
  );
};

export default Header;
