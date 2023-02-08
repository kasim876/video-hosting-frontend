import React, {FC, useState} from 'react';

import {ReactComponent as SearchIcon} from '@assets/images/search.svg';

import classes from './Search.module.scss';

const Search: FC = () => {
  const [query, setQuery] = useState('');

  return (
    <label className={classes.root}>
      <input
        type="text"
        placeholder="Поиск"
        className={classes.input}
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <SearchIcon className={classes.icon} />
    </label>
  );
};

export default Search;
