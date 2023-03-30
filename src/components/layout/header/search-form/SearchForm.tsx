import {FC, useState} from 'react';

import Input from '@/components/ui/input/Input';

import classes from './SearchForm.module.scss';

const SearchForm: FC = () => {
  const [value, setValue] = useState('');

  return (
    <form className={classes.root}>
      <Input
        type="text"
        name="search"
        value={value}
        placeholder="Поиск"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
