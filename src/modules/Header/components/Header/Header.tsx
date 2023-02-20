import {FC, useState} from 'react';

import {Logo} from '@ui/Logo';

import {RightIcons} from '../RightIcons/RightIcons';
import {SearchForm} from '../SearchForm/SearchForm';

import classes from './Header.module.scss';

export const Header: FC = () => {
  const [query, setQuery] = useState('');

  return (
    <header className={classes.root}>
      <Logo className={classes.logo} />
      <SearchForm
        value={query}
        setValue={setQuery}
      />
      <RightIcons />
    </header>
  );
};
