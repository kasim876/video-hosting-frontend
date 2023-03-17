import {Dispatch, SetStateAction, forwardRef} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

import {useAppDispatch} from '@/hooks/useAppDispatch';
import {EMAIL_PATTERN} from '@/modules/Header/consts';
import {IAuthFields} from '@/types/auth.interface';
import {ButtonSolid} from '@/ui/ButtonSolid';

import AuthField from '../AuthField/AuthField';

import classes from './AuthForm.module.scss';

interface IAuthForm {
  type: string;
  setIsShow: Dispatch<SetStateAction<boolean>>;
}

export const AuthForm = forwardRef<HTMLFormElement, IAuthForm>(({type, setIsShow}, ref) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IAuthFields>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<IAuthFields> = async data => {
    console.log(data);
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
            required: 'Введите e-mail',
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
            required: 'Введите пароль',
            minLength: {
              value: 6,
              message: 'Минимальная длина пароля - 6 символов',
            },
          })}
        />
        <ButtonSolid>{type === 'register' ? 'Зарегестрироваться' : 'Войти'}</ButtonSolid>
      </form>
    </div>
  );
});
