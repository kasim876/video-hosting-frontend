import React, {FC, useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

import Field from '@components/ui/field';

import {EMAIL_PATTERN} from '@utils/consts';

import useOutside from '@/hooks/useOutside';
import {IAuthFields} from '@/types/fields.interface';

import classes from './AuthForm.module.scss';

const AuthForm: FC = () => {
  const {ref, isShow, setIsShow} = useOutside(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<IAuthFields>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<IAuthFields> = data => {
    console.log(data);
    reset();
  };

  const [type, setType] = useState<'login' | 'register'>('login');

  return (
    <div
      className={classes.root}
      ref={ref}
    >
      <button
        className={classes.button}
        onClick={() => setIsShow(!isShow)}
      >
        Войти
      </button>

      {isShow && (
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          {type === 'register' && (
            <Field
              error={errors.username}
              type="text"
              placeholder="Имя пользователя"
              {...register('username', {
                required: 'Введите имя пользователя',
              })}
            />
          )}
          <Field
            error={errors.email}
            type="text"
            placeholder="E-mail"
            {...register('email', {
              required: 'Введите email',
              pattern: {
                value: EMAIL_PATTERN,
                message: 'Введите корректный email',
              },
            })}
          />
          <Field
            error={errors.password}
            type="password"
            placeholder="Пароль"
            {...register('password', {
              required: 'Введите пароль',
              minLength: {
                value: 6,
                message: 'Минимальная длина пароля - 6 символов',
              },
            })}
          />

          <button className={classes.formButton}>
            {type === 'register' ? 'Регистрация' : 'Вход'}
          </button>

          <button
            type="button"
            className={classes.typeAuth}
            onClick={() => setType(type === 'register' ? 'login' : 'register')}
          >
            {type === 'register' ? 'Вход' : 'Регистрация'}
          </button>
        </form>
      )}
    </div>
  );
};

export default AuthForm;
