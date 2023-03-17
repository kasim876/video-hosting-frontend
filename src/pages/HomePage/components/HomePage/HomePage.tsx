import {shuffle} from '@funboxteam/diamonds';
import {FC} from 'react';

import {useAppDispatch} from '@/hooks/useAppDispatch';

import classes from './HomePage.module.scss';

export const HomePage: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={classes.root}>
      <h2>Нет видео</h2>
    </div>
  );
};
