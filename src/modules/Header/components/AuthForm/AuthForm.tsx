import {AxiosError} from 'axios';
import {Dispatch, SetStateAction, forwardRef} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

import {ButtonSolid} from '@ui/ButtonSolid';

import {login, registration} from '../../api';
import {EMAIL_PATTERN} from '../../consts';
import {IAuthFields} from '../../types/AuthFields';
import AuthField from '../AuthField/AuthField';

import classes from './AuthForm.module.scss';

type Props = {
  type: string;
  setIsShow: Dispatch<SetStateAction<boolean>>;
};

export const AuthForm = forwardRef<HTMLFormElement, Props>(
  ({type, setIsShow}, ref) => {
    const {
      register,
      handleSubmit,
      formState: {errors},
    } = useForm<IAuthFields>({
      mode: 'onSubmit',
      reValidateMode: 'onSubmit',
    });

    const onSubmit: SubmitHandler<IAuthFields> = async data => {
      let user;

      try {
        if (type === 'register') {
          user = await registration(data.name, data.email, data.password);
        } else {
          user = await login(data.email, data.password);
        }

        console.log(user);
        setIsShow(false);
      } catch (error) {
        const err = error as AxiosError;

        alert(err.response?.data);
      }
    };

    return (
      <div className={classes.root}>
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
          ref={ref}
        >
          {type === 'register' && (
            <AuthField
              error={errors.name}
              placeholder="Имя"
              {...register('name', {
                required: 'Введите имя',
                minLength: {
                  value: 3,
                  message: 'Минимальная длина - 3 символа',
                },
              })}
            />
          )}
          <AuthField
            error={errors.email}
            placeholder="E-mail"
            {...register('email', {
              required: 'E-mail',
              pattern: {
                value: EMAIL_PATTERN,
                message: 'Введите корректный адрес электронной почты',
              },
            })}
          />
          <AuthField
            error={errors.password}
            placeholder="Пароль"
            type="password"
            {...register('password', {
              required: 'Пароль',
              minLength: {
                value: 6,
                message: 'Минимальная длина пароля - 6 символов',
              },
            })}
          />
          <ButtonSolid>
            {type === 'register' ? 'Зарегестрироваться' : 'Войти'}
          </ButtonSolid>
        </form>
      </div>
    );
  },
);
