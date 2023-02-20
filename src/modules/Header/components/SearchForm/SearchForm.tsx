import {Dispatch, FC, SetStateAction} from 'react';

import {Input} from '@ui/Input';

import classes from './SearchForm.module.scss';

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export const SearchForm: FC<Props> = ({value, setValue}) => {
  return (
    <form className={classes.root}>
      <Input
        type="text"
        value={value}
        name="search"
        placeholder="Поиск"
        onChange={event => setValue(event.target.value)}
      />
    </form>
  );
};
