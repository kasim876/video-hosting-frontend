import {Dispatch, FC, SetStateAction} from 'react';

import {ButtonOutlined} from '@ui/ButtonOutlined';
import {ButtonSolid} from '@ui/ButtonSolid';

import classes from './AuthButtons.module.scss';

type Props = {
  setType: any;
  setIsShow: Dispatch<SetStateAction<boolean>>;
};

const AuthButtons: FC<Props> = ({setType, setIsShow}) => {
  return (
    <div className={classes.root}>
      <ButtonOutlined
        className={classes.item}
        type="button"
        onClick={() => {
          setType('login');
          setIsShow(true);
        }}
      >
        Войти
      </ButtonOutlined>
      <ButtonSolid
        className={classes.item}
        type="button"
        onClick={() => {
          setType('register');
          setIsShow(true);
        }}
      >
        Регистрация
      </ButtonSolid>
    </div>
  );
};

export default AuthButtons;
