import cn from 'clsx';
import {FC, useState} from 'react';
import {BsPersonPlusFill} from 'react-icons/bs';
import { ButtonSolid } from '../ButtonSolid';

import classes from './SubscribeButton.module.scss';

export const SubscribeButton: FC = () => {
  const [isSub, setIsSub] = useState(false);

  return (
    <ButtonSolid
      className={cn(classes.root, isSub && classes.subscribed)}
      onClick={() => setIsSub(!isSub)}
    >
      <BsPersonPlusFill />
      <span>{isSub ? 'Вы подрисаны' : 'Подписаться'}</span>
    </ButtonSolid>
  );
};
