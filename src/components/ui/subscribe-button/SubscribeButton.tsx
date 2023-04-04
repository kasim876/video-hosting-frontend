import classNames from 'classnames';
import {FC, useState} from 'react';
import {BsPersonPlusFill} from 'react-icons/bs';

import ButtonSolid from '../button-solid/ButtonSolid';

import classes from './SubscribeButton.module.scss';

const SubscribeButton: FC = () => {
  const [isSub, setIsSub] = useState(false);

  return (
    <button
      className={classNames(classes.root, isSub && classes.subscribed)}
      onClick={() => setIsSub(!isSub)}
    >
      <BsPersonPlusFill />
      <span>{isSub ? 'Вы подрисаны' : 'Подписаться'}</span>
    </button>
  );
};

export default SubscribeButton;
