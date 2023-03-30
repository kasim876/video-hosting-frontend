import {Dispatch, FC, SetStateAction} from 'react';

import ButtonOutlined from '@/components/ui/button-outlined/ButtonOutlined';
import ButtonSolid from '@/components/ui/button-solid/ButtonSolid';

import classes from './AuthButtons.module.scss';

interface IAuthButtons {
  setType: any;
  setIsShow: Dispatch<SetStateAction<boolean>>;
}

const AuthButtons: FC<IAuthButtons> = ({setIsShow, setType}) => {
  return (
    <div className={classes.root}>
      <ButtonOutlined
        type="button"
        onClick={() => {
          setType('login');
          setIsShow(true);
        }}
      >
        Войти
      </ButtonOutlined>
      <ButtonSolid
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
